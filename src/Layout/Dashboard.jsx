import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  FcLike,
  FcApproval,
  FcCurrencyExchange,
  FcHome,
  FcGallery,
  FcReading,
  FcAssistant,
} from "react-icons/fc";
import useClasses from "../Hooks/UseClsasses";

const Dashboard = () => {
  const [selectedClasses] = useClasses();
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
            <Link to="/dashboard/home">
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
              <span className=" text-base font-semibold">Payment History</span>
            </Link>
            <Link to="/dashboard/myGallery">
              <FcGallery className=" text-xl"></FcGallery>
              <span className=" text-base font-semibold">My Gallery</span>
            </Link>
          </li>
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
