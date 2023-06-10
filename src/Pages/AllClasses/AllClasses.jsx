const AllClasses = ({ classes }) => {
  const {
    instructor_name,
    instructors_img,
    image,
    available_seats,
    music_class_name,
    price,
  } = classes;
  return (
    <div className="classes p-5">
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
        <button className="btn btn-outline btn-secondary rounded-full ">
          Select
        </button>
      </div>
    </div>
  );
};

export default AllClasses;
