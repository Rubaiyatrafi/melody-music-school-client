import instructors1 from "../../../assets/images/Picture1.jpg";
import instructors2 from "../../../assets/images/Picture2.jpg";
import instructors3 from "../../../assets/images/Picture3.jpg";
import instructors4 from "../../../assets/images/Picture4.jpg";
import instructors5 from "../../../assets/images/Picture5.jpg";
import instructors6 from "../../../assets/images/Picture6.jpg";
const PopularInstructors = () => {
  return (
    <div>
      <div className="border-y-4 p-4 mb-4">
        <h1 className=" text-center font-bold font-serif text-4xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-3">
          Popular Instructors
        </h1>
      </div>
      <div className=" p-5 grid md:grid-cols-3 gap-5  items-center ml-28">
        <div className="w-60 classes p-2">
          <img className="rounded-full" src={instructors1} alt="" />
          <h1 className="text-center text-2xl font-extrabold text-purple-500 mb-2">
            Adam Smith
          </h1>
        </div>
        <div className="w-60 classes p-2">
          <img className=" rounded-full" src={instructors2} alt="" />
          <h1 className="text-center text-2xl font-extrabold text-purple-500 mb-2">
            Gill Bart
          </h1>
        </div>
        <div className="w-60 classes p-2">
          <img className=" rounded-full" src={instructors3} alt="" />
          <h1 className="text-center text-2xl font-extrabold text-purple-500 mb-2">
            Noor Ahmed
          </h1>
        </div>
        <div className="w-60 classes p-2">
          <img className=" rounded-full" src={instructors4} alt="" />
          <h1 className="text-center text-2xl font-extrabold text-purple-500 mb-2">
            Ching Pong
          </h1>
        </div>
        <div className="w-60 classes p-2">
          <img className=" rounded-full" src={instructors5} alt="" />
          <h1 className="text-center text-2xl font-extrabold text-purple-500 mb-2">
            Ketty Bell
          </h1>
        </div>
        <div className="w-60 classes p-2">
          <img className=" rounded-full" src={instructors6} alt="" />
          <h1 className="text-center text-2xl font-extrabold text-purple-500 mb-2">
            Sheng Lee
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
