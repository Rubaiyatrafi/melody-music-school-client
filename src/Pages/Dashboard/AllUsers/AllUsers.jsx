import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FcDeleteDatabase, FcButtingIn } from "react-icons/fc";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
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
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
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
        <title>Melody Music | Manage Users</title>
      </Helmet>
      <div className=" flex flex-col items-center mb-20">
        <h1 className=" text-purple-300 font-semibold">---At a Glance---</h1>

        <h1 className=" text-purple-500 text-5xl font-extrabold">
          Manage Users
        </h1>
      </div>
      <hr />
      <div className=" font-extrabold text-xl flex justify-evenly items-center font-serif m-5">
        <h1 className=" text-3xl text-purple-800">
          Total Users: {users.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            <tr className=" font-bold text-sm">
              <th>#</th>
              <th>User Image</th>
              <th>User Name </th>
              <th>User Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" bg-slate-200">
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="text-sm font-semibold opacity-70">
                      {user.name}
                    </div>
                  </div>
                </td>
                <td>
                  <p className=" font-semibold">{user.email}</p>
                </td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm btn-ghost bg-pink-300"
                    >
                      <FcButtingIn className=" text-2xl"></FcButtingIn>
                    </button>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-sm btn-ghost bg-red-400"
                  >
                    <FcDeleteDatabase className=" text-2xl"></FcDeleteDatabase>
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

export default AllUsers;
