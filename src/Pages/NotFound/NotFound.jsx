import { Link } from "react-router-dom";
import notfound from "../../assets/images/notfound.jpg";

const NotFound = () => {
  return (
    <div>
      <div>
        <h1 className="text-8xl text-center font-bold  mt-10 mb-10 text-fuchsia-600">
          Ooops !!!
        </h1>
        <p className="text-center text-xl mb-10 mt-2 font-semibold text-rose-600 ">
          The page you are lookoing for might have been removed or does not
          exist...
        </p>
      </div>
      <div className=" m-20 ">
        <img className="rounded-md w-full" src={notfound} alt="" />
      </div>
      <div className="flex justify-center mb-10">
        <button className="btn btn-outline btn-secondary font-semibold">
          <Link to="/">Back to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
