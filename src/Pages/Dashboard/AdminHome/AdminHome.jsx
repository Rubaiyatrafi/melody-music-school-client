import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className=" w-full p-5 ">
      <Helmet>
        <title>Melody Music | Admin home</title>
      </Helmet>

      <div className="flex justify-between">
        <div>
          <h1 className=" text-purple-500 text-6xl font-bold mb-20 text-center font-serif">
            Welcome {user.displayName}
          </h1>
        </div>
        <div>
          <img className="w-10 rounded-full" src={user.photoURL} alt="" />
        </div>
      </div>
      <div className="stats shadow gap-4 w-full">
        <div className="stat place-items-center bg-gradient-to-r from-green-200 via-yellow-300 to-pink-200">
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 w-full">
          <div className="stat-title">Classes</div>
          <div className="stat-value text-secondary">{stats.classes}</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center w-full bg-gradient-to-r from-rose-300 via-purple-300 to-blue-200">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">{stats.selectedClasses}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
