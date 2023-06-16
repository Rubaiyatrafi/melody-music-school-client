import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  FcLike,
  FcApproval,
  FcCurrencyExchange,
  FcHome,
  FcReading,
  FcAssistant,
  FcAddressBook,
  FcBusinessman,
} from "react-icons/fc";
import useClasses from "../Hooks/UseClsasses";
import useAdmin from "../Hooks/UseAdmin";
import useInstructors from "../Hooks/UseInstructors";

const Dashboard = () => {
  const [selectedClasses] = useClasses();

  // const isAdmin = true;

  const [isAdmin] = useAdmin();
  const [isInstructors] = useInstructors();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary drawer-button lg:hidden"
        >
          Menu
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li className="flex flex-col items-center justify-center">
                <div>
                  <img className="w-12 rounded-lg" src={logo} alt="" />
                </div>
                <div>
                  <span className=" text-lg font-bold text-red-500">
                    Melody Music School
                  </span>
                </div>
              </li>
              <li>
                <Link to="/dashboard/adminhome">
                  <FcHome className=" text-xl"></FcHome>
                  <span className=" text-base font-semibold">Admin Home</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/mySelectedClasses">
                  <FcAddressBook className=" text-xl"></FcAddressBook>
                  <span className=" text-base font-semibold">
                    Manage Classes
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">
                  <FcBusinessman className=" text-xl"></FcBusinessman>
                  <span className=" text-base font-semibold">Manage Users</span>
                </Link>
              </li>
            </>
          ) : isInstructors ? (
            <>
              <li className="flex flex-col items-center justify-center">
                <div>
                  <img className="w-12 rounded-lg" src={logo} alt="" />
                </div>
                <div>
                  <span className=" text-lg font-bold text-red-500">
                    Melody Music School
                  </span>
                </div>
              </li>
              <li>
                <Link to="/dashboard/instructorhome">
                  <FcHome className=" text-xl"></FcHome>
                  <span className=" text-base font-semibold">
                    Instructor Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addclasses">
                  <FcAddressBook className=" text-xl"></FcAddressBook>
                  <span className=" text-base font-semibold">Add a Class</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myclasses">
                  <FcAddressBook className=" text-xl"></FcAddressBook>
                  <span className=" text-base font-semibold">My Classes</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="flex flex-col items-center justify-center">
                <div>
                  <img className="w-12 rounded-lg" src={logo} alt="" />
                </div>
                <div>
                  <span className=" text-lg font-bold text-red-500">
                    Melody Music School
                  </span>
                </div>
              </li>
              <li>
                <Link to="/dashboard/userhome">
                  <FcHome className=" text-xl"></FcHome>
                  <span className=" text-base font-semibold">My Home</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/mySelectedClasses">
                  <FcLike className=" text-xl"></FcLike>
                  <span className=" text-base font-semibold">
                    My Selected Classes{" "}
                    <span className="badge badge-secondary">
                      {selectedClasses?.length || 0}
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myEnrolledClasses">
                  <FcApproval className=" text-xl"></FcApproval>
                  <span className=" text-base font-semibold">
                    My Enrolled Classes
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myPayment">
                  <FcCurrencyExchange className=" text-xl"></FcCurrencyExchange>
                  <span className=" text-base font-semibold">
                    Payment History
                  </span>
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FcHome className=" text-xl"></FcHome>
              <span className=" text-base font-semibold"> Home</span>
            </Link>
          </li>
          <li>
            <Link to="/classes">
              <FcReading className=" text-xl"></FcReading>
              <span className=" text-base font-semibold">Classes</span>
            </Link>
          </li>
          <li>
            <Link to="/instructors">
              <FcAssistant className=" text-xl"></FcAssistant>
              <span className=" text-base font-semibold">Instructors</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
