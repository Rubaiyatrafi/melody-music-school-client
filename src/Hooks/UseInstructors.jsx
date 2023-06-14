import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";
const useInstructors = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isInstructors, isLoading: isInstructorsLoading } = useQuery({
    queryKey: ["isInstructors", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
      // console.log("is instructors response", res);
      return res.data.instructors;
    },
  });
  return [isInstructors, isInstructorsLoading];
};

export default useInstructors;
