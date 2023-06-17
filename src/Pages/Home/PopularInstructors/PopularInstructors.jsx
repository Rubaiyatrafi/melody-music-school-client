import { useEffect, useState } from "react";
import PInstructors from "../PInstructors/PInstructors";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://melody-music-school-server-xi.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        const popularInstructors = data.filter(
          (classes) => classes.category === "Popular"
        );
        setInstructors(popularInstructors);
      });
  }, []);
  return (
    <div>
      <div className="border-y-4 p-4 mb-4">
        <h1 className=" text-center font-bold font-serif text-4xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-3">
          Popular Instructor
        </h1>
      </div>
      <div>
        <p className=" text-center font-semibold text-2xl">
          Here we show our best
          <span className=" font-bold  text-purple-500"> Instructor</span> for
          you
        </p>
      </div>
      <div className=" rounded p-24">
        <div className=" grid md:grid-cols-3 gap-2">
          {instructors.map((instructors) => (
            <PInstructors
              key={instructors._id}
              instructors={instructors}
            ></PInstructors>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
