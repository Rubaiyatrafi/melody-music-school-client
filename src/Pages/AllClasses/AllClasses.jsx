import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useClasses from "../../Hooks/UseClsasses";

const AllClasses = ({ classes }) => {
  const {
    _id,
    instructor_name,
    instructors_img,
    image,
    available_seats,
    music_class_name,
    price,
  } = classes;

  const { user } = useContext(AuthContext);
  const [, refetch] = useClasses();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectedClasses = (selectedClasses) => {
    console.log(selectedClasses);
    if (user && user.email) {
      const selectedClasses = {
        classesId: _id,
        instructor_name,
        instructors_img,
        image,
        music_class_name,
        available_seats,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClasses),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class Selected Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to Melody Music",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="classes p-5 hover:bg-gradient-to-r from-indigo-100 from-10% via-sky-300 via-30% to-emerald-200 to-90% rounded-md">
      <h1 className=" text-3xl font-extrabold text-purple-500 text-center mb-2">
        {music_class_name}
      </h1>
      <div className=" flex justify-between items-center m-3">
        <div>
          <h1 className="font-bold text-sky-700 text-lg">{instructor_name}</h1>
        </div>
        <div className=" w-10">
          <img src={instructors_img} alt="" />
        </div>
      </div>
      <div>
        <img className=" h-82 w-full rounded-xl mb-2" src={image} alt="" />
      </div>

      <p className=" font-semibold text-base">
        <span className="font-bold text-sky-700 text-lg">
          Available Seats:{" "}
        </span>
        {available_seats}
      </p>
      <p className=" text-rose-600 font-extrabold">
        <span className=" font-semibold text-lg text-sky-700">Price:</span>{" "}
        {price}
      </p>
      <div className=" flex justify-center mt-5">
        <button
          onClick={() => handleSelectedClasses(classes)}
          className="btn btn-outline btn-secondary rounded-full "
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default AllClasses;
