import { useQuery } from "@tanstack/react-query";

import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useClasses = () => {
  const { user } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const {
    // isLoading,
    refetch,
    data: selectedClasses = [],
  } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/selectedClasses?email=${user?.email}`
      );
      // console.log("response from axios", response);
      // console.log("user to check", user);
      return response.data;
    },
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/selectedClasses?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return response.json();
    // },
  });
  return [selectedClasses, refetch];
  // return [selectedClasses, refetch, isLoading];
};

export default useClasses;
