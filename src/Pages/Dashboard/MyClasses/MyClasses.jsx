import { Helmet } from "react-helmet-async";
import { FcDeleteDatabase, FcRefresh } from "react-icons/fc";
import Swal from "sweetalert2";
import useMyClasses from "../../../Hooks/UseMyClasses";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
const MyClasses = () => {
  const [MyClasses, refetch] = useMyClasses();
  const [axiosSecure] = useAxiosSecure();
  // console.log(MyClasses);
  // const total = MyClasses.reduce((sum, item) => item.price + sum, 0);

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
        axiosSecure.delete(`myclasses/${row._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
          }
          refetch();
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
      <div className=" font-bold text-2xl   text-center m-5 text-purple-700">
        <h1>My Added Classes: {MyClasses.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            <tr>
              <th>#</th>
              <th>Classes</th>
              <th>Status </th>
              <th>Price(Tk)</th>
              <th>Enrolled Students</th>
              <th>Feedback</th>

              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody className=" bg-slate-200">
            {MyClasses.map((row, index) => (
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
                    <div className="text-sm opacity-70 text-red-500">
                      <p>Pending</p>
                    </div>
                  </div>
                </td>
                <td>{row.price}</td>
                <td>0</td>
                <td>
                  <p>You have to wait for approval</p>
                </td>

                <td>
                  <div className=" flex">
                    <Link to="/dashboard/updateclass">
                      <button
                        // onClick={() => handleDelete(row)}
                        className="btn btn-sm btn-ghost bg-emerald-500"
                      >
                        <FcRefresh className=" text-xl"></FcRefresh>
                      </button>
                    </Link>
                    <Link>
                      <button
                        onClick={() => handleDelete(row)}
                        className="btn btn-sm btn-ghost bg-red-500"
                      >
                        <FcDeleteDatabase className=" text-xl"></FcDeleteDatabase>
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
