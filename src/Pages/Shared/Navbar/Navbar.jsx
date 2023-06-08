import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar md:flex-row  justify-between flex-col rounded mb-10">
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

          {/* {user ? (
            <>
              <span className="navbar md:flex-row  justify-between flex-col ">
                <NavLink to="/addatoy">Add a Toy</NavLink>
                <NavLink to={`/mytoys/${user.email}`}>My Toys</NavLink>
                {dispName ? <h2>{user.displayName}</h2> : <h2></h2>}
                <img
                  onMouseEnter={() => setDisplayName(true)}
                  onMouseLeave={() => setDisplayName(false)}
                  className=" w-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <button onClick={handleSignout}>
                  <NavLink>Signout</NavLink>
                </button>
              </span>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
