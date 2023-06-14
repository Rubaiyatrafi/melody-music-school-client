import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // const token = localStorage.getItem("access-token");

  // const { data: admin = [], refetch } = useQuery({
  //   queryKey: ["users", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:5000/users/admin/${user?.email}`,
  //       {
  //         headers: {
  //           authorization: `bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log("is Admin response", res);
  //     return res.json;
  //   },
  // });
  // return [admin, refetch];
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("is Admin response", res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
