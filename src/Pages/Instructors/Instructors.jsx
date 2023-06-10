import { Helmet } from "react-helmet-async";

const Instructors = () => {
  return (
    <div>
      <Helmet>
        <title>Melody Music | Instructors</title>
      </Helmet>
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url(https://i.ibb.co/g9T1ZnK/13514659-SL-123119-26540-04.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-purple-500">
              <span className=" text-white">Our</span> Mission
            </h1>
            <p className="mb-5 font-semibold">
              We provide a supportive and positive environment where students of
              all ages, backgrounds and skill levels are offered for performance
              and learning opportunities to achieve exeptional results.
            </p>
          </div>
        </div>
      </div>
      <h1 className=" text-center font-bold font-serif text-4xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 mt-5 mb-10 rounded-sm">
        All Instructors
      </h1>
    </div>
  );
};

export default Instructors;
