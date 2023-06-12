import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useClasses = () => {
  const { user } = useContext(AuthContext);

  const {
    // isLoading,
    refetch,
    data: selectedClasses = [],
  } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/selectedClasses?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [selectedClasses, refetch];
  // return [selectedClasses, refetch, isLoading];
};

export default useClasses;
