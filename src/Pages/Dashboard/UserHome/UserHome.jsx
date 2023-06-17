import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/UseAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div className=" w-full p-5 ">
      <Helmet>
        <title>Melody Music | Student home</title>
      </Helmet>

      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className=" text-purple-500 text-6xl font-bold mb-20 text-center font-serif">
            Welcome {user.displayName}
          </h1>
        </div>
        <div>
          <img className="w-52 rounded-full" src={user.photoURL} alt="" />
        </div>
      </div>
      <div className="stats shadow gap-4 w-full">
        <div className="stat place-items-center bg-gradient-to-r from-green-200 via-yellow-300 to-pink-200">
          <div className="stat-title">Registered</div>
          <div className="stat-value">{}</div>
          <div className="stat-desc"> January, 2023 </div>
        </div>

        <div className="stat place-items-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 w-full">
          <div className="stat-title">Classes</div>
          <div className="stat-value text-secondary"></div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center w-full bg-gradient-to-r from-rose-300 via-purple-300 to-blue-200">
          <div className="stat-title">Payment History</div>
          <div className="stat-value">{}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
