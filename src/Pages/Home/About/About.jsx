import "./About.css";
import cover from "../../../assets/images/cover1.jpg";
const About = () => {
  return (
    <div className=" mt-32">
      <div className="sm:flex justify-between sm:grid-cols-1 grid p-10">
        <div className=" bg-[#d0e7f5] w-60 h-32 p-4 text-center rounded-lg">
          <h1 className=" text-2xl font-extrabold text-blue-900">
            Free Classes
          </h1>
          <p className=" text-sm mt-3 font-semibold">
            We provide free classes for your experience
          </p>
        </div>
        <div className=" bg-[#f5ded8] w-60 h-32 p-4 text-center rounded-lg">
          <h1 className=" text-2xl font-extrabold text-blue-900">
            14 Days return
          </h1>
          <p className=" text-sm mt-3 font-semibold">
            We return your fees fast if you want
          </p>
        </div>
        <div className=" bg-[#f8cdef] w-60 h-32 p-4 text-center rounded-lg">
          <h1 className=" text-2xl font-extrabold text-blue-900">
            24/7 Support
          </h1>
          <p className=" text-sm mt-3 font-semibold">
            We always in your side for online support
          </p>
        </div>
      </div>
      <div>
        <div className="hero min-h-screen bg-[#eeebf5] p-10 mt-10 mb-10 rounded-xl bg-image">
          <div className="hero-content flex-col lg:flex-row w-full">
            <div className=" w-1/2">
              <img src={cover} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
            <div className=" w-1/2">
              <h1 className="text-5xl font-bold">
                Open <span className=" text-purple-600">Concert</span> of 2023
              </h1>
              <p className="py-6 font-extrabold">
                The best Concert for your charmful heart will be held in
                December. This will be a memorable day ever
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
