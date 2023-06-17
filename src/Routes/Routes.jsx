import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Routes/PrivateRoute";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import NotFound from "../Pages/NotFound/NotFound";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClasses from "../Pages/Dashboard/AddClasses/AddClasses";
import InstructorsRoutes from "./InstructorsRoutes";
import AdminRoutes from "./AdminRoutes";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import UpdateClass from "../Pages/Dashboard/UpdateClass/UpdateClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import MyEnroll from "../Pages/Dashboard/MyEnroll/MyEnroll";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "myselectedclasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myenroll",
        element: <MyEnroll></MyEnroll>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "adminhome",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "instructorhome",
        element: (
          <InstructorsRoutes>
            <InstructorHome></InstructorHome>
          </InstructorsRoutes>
        ),
      },
      {
        path: "addclasses",
        element: (
          <InstructorsRoutes>
            <AddClasses></AddClasses>
          </InstructorsRoutes>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorsRoutes>
            <MyClasses></MyClasses>
          </InstructorsRoutes>
        ),
      },
      {
        path: "updateclass",
        element: <UpdateClass></UpdateClass>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
