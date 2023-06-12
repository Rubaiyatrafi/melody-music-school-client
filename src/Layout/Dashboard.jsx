import { Link, Outlet } from "react-router-dom";
import {
  FcLike,
  FcApproval,
  FcCurrencyExchange,
  FcHome,
  FcGallery,
  FcReading,
  FcAssistant,
} from "react-icons/fc";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link>
              <FcHome className=" text-xl"></FcHome>
              <span className=" text-base font-semibold">My Home</span>
            </Link>
          </li>
          <li>
            <Link>
              <FcLike className=" text-xl"></FcLike>
              <span className=" text-base font-semibold">
                My Selected Classes
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <FcApproval className=" text-xl"></FcApproval>
              <span className=" text-base font-semibold">
                My Enrolled Classes
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <FcCurrencyExchange className=" text-xl"></FcCurrencyExchange>
              <span className=" text-base font-semibold">Payment History</span>
            </Link>
            <Link>
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
            <Link>
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
