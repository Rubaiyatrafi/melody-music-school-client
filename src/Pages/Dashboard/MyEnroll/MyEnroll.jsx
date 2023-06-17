import { Helmet } from "react-helmet-async";
import useClasses from "../../../Hooks/UseClsasses";
import { FcDeleteDatabase } from "react-icons/fc";
import Swal from "sweetalert2";
const MyEnroll = () => {
  const [selectedClasses, refetch] = useClasses();
  // console.log(selectedClasses);

  const handleDelete = (row) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://melody-music-school-server-xi.vercel.app/selectedClasses/${row._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className=" w-full p-5">
      <Helmet>
        <title>Melody Music | My Classes</title>
      </Helmet>
      <div className=" flex flex-col items-center mb-20">
        <h1 className=" text-purple-300 font-semibold">---At a Glance---</h1>

        <h1 className=" text-purple-500 text-5xl font-extrabold">My Classes</h1>
      </div>
      <hr />
      <div className=" font-bold text-xl text-center m-5">
        <h1>My Enrolled Classes: {selectedClasses.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            <tr>
              <th>#</th>
              <th>Classes</th>
              <th>Instructors </th>
              <th>User Email</th>
              <th>Price(Tk)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" bg-slate-200">
            {selectedClasses.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={row.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{row.music_class_name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="text-sm opacity-50">
                      {row.instructor_name}
                    </div>
                  </div>
                </td>
                <td>{row.email}</td>
                <td>{row.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(row)}
                    className="btn btn-sm btn-ghost bg-red-500"
                    disabled
                  >
                    <FcDeleteDatabase className=" text-xl"></FcDeleteDatabase>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnroll;
