import { useQuery } from "@tanstack/react-query";

import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/selectedClasses?email=${user?.email}`
      );
      // console.log("response from axios", response);
      // console.log("user to check", user);
      return response.data;
    },
  });
  return [selectedClasses, refetch];
};

export default useClasses;
