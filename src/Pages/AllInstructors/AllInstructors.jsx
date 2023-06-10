import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
const AllInstructors = ({ instructors }) => {
  const { instructor_name, instructors_img, email, activities } = instructors;
  return (
    <div className="classes p-5 hover:bg-gradient-to-r from-indigo-100 from-10% via-sky-300 via-30% to-emerald-200 to-90% rounded-md">
      <h1 className=" text-3xl font-extrabold text-purple-500 text-center mb-2">
        {instructor_name}
      </h1>
      <div>
        <img src={instructors_img} alt="" />
      </div>
      <p className=" font-semibold text-base">
        <span className="font-bold text-sky-700 text-lg">Classes: </span>
        {activities}
      </p>
      <p className=" font-semibold text-base">
        <span className="font-bold text-sky-700 text-lg">Email: </span>
        {email}
      </p>
      <div className=" mt-2">
        <h1 className="font-bold text-sky-700 text-lg mb-2">Follow me:</h1>
        <div className=" flex gap-4">
          <button>
            <FaGoogle className="text-purple-500"></FaGoogle>
          </button>
          <button>
            <FaTwitter className="text-purple-500"></FaTwitter>
          </button>
          <button>
            <FaFacebook className="text-purple-500"></FaFacebook>
          </button>
        </div>
      </div>
      <div className=" flex justify-center mt-5">
        <button className="btn btn-outline btn-secondary rounded-full ">
          See Classes
        </button>
      </div>
    </div>
  );
};

export default AllInstructors;
