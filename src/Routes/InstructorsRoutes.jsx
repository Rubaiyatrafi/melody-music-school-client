import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import useInstructors from "../Hooks/UseInstructors";

const InstructorsRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructors, isInstructorsLoading] = useInstructors();
  const location = useLocation();
  // console.log(location);
  if (loading || isInstructorsLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isInstructors) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorsRoutes;
