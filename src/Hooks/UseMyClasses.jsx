import { useQuery } from "@tanstack/react-query";

import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useMyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: MyClasses = [] } = useQuery({
    queryKey: ["myclasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/myclasses?email=${user?.email}`);
      // console.log("response from axios", response);
      // console.log("user to check", user);
      return response.data;
    },
  });
  return [MyClasses, refetch];
};

export default useMyClasses;
