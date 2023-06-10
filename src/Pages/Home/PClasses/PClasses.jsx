/* eslint-disable no-unused-vars */
const PClasses = ({ classes }) => {
  const { music_class_name, activities, number_of_students, image } = classes;
  return (
    <div className="classes p-5">
      <h1 className=" text-3xl font-extrabold text-purple-500 text-center mb-2">
        {music_class_name}
      </h1>
      <div>
        <img className=" h-82 w-full rounded-xl mb-2" src={image} alt="" />
      </div>

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

export default PClasses;
