import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FcAssistant } from "react-icons/fc";
import { useContext } from "react";

import "./Navbar.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useClasses from "../../../Hooks/UseClsasses";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [selectedClasses] = useClasses();

  const handleSignout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="navbar md:flex-row  justify-between flex-col rounded mb-10 bg-gradient-to-r from-indigo-500">
        <div className="flex flex-col gap-3">
          <img className="w-12 rounded-lg" src={logo} alt="" />
          <h2 className="ml-2 text-4xl font-bold font-serif text-blue-950 title-name">
            <span className="text-rose-700">Melody</span> Music
          </h2>
        </div>
        <div className="text-1xl font-bold font-sans  md:flex-row flex-col link-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/instructors">Instructors</NavLink>
          <NavLink to="/classes">Classes</NavLink>

          {user ? (
            <>
              <span className="navbar md:flex-row  justify-between flex-col ">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/dashboard/myselectedclasses">
                  <button className="btn">
                    <FcAssistant></FcAssistant>
                    <p className=" text-xs">My Classes</p>
                    <div className="badge badge-secondary">
                      {selectedClasses?.length || 0}
                    </div>
                  </button>
                </NavLink>

                <button onClick={handleSignout}>
                  <NavLink>Signout</NavLink>
                </button>
                <div className=" flex flex-col">
                  <img
                    className="w-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                  <p className=" text-xs">{user.displayName}</p>
                </div>
              </span>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
