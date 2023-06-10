const PInstructors = ({ instructors }) => {
  const {
    music_class_name,
    activities,
    number_of_students,
    instructor_name,
    instructors_img,
  } = instructors;
  return (
    <div className="classes p-5">
      <h1 className=" text-3xl font-extrabold text-purple-500 text-center mb-2">
        {instructor_name}
      </h1>
      <div>
        <img
          className="w-full rounded-xl mb-2 h-80"
          src={instructors_img}
          alt=""
        />
      </div>
      <h1 className=" text-xl font-extrabold text-purple-400 text-center mb-2">
        {music_class_name}
      </h1>

      <p className=" font-semibold text-base">
        <span className="font-bold text-sky-700 text-lg">Activites: </span>
        {activities}
      </p>
      <p>
        <span className=" font-semibold text-lg text-sky-700">
          Number of Students:
        </span>{" "}
        {number_of_students}
      </p>
    </div>
  );
};

export default PInstructors;
