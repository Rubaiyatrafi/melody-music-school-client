import { useEffect, useState } from "react";
import Classes from "../Home/Classes/Classes";
import "./PopularClasses.css";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
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
          {classes.map((classes) => (
            <Classes key={classes._id} classes={classes}></Classes>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
