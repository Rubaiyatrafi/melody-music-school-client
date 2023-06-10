import { useEffect, useState } from "react";
import PInstructors from "../PInstructors/PInstructors";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("classes.json")
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
          Popular Classes
        </h1>
      </div>
      <div className=" rounded p-4">
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