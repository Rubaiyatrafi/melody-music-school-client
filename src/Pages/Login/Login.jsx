import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [showpass, setShowpass] = useState(false);
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 login-container mt-10 mb-10 rounded-2xl">
      <div className="hero-content flex-col gap-4">
        <div className=" w-16 flex justify-center">
          <img className="rounded-lg" src={logo} alt="" />
        </div>
        <div className=" w-full space-y-5">
          <h1 className="text-center">
            <span className=" text-2xl text-sky-900 font-bold">Welcome to</span>{" "}
            <br />{" "}
            <span className=" text-4xl text-purple-500 font-extrabold">
              Melody Music School
            </span>
          </h1>
          <p className=" text-lg font-semibold text-sky-900 text-center">
            Please Login to continue access
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body ">
            <h1 className="text-5xl font-bold text-center mb-10 text-purple-500">
              Login{" "}
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showpass ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <p className="p-1" onClick={() => setShowpass(!showpass)}>
                  {showpass ? (
                    <Link>
                      <FaRegEyeSlash></FaRegEyeSlash>
                    </Link>
                  ) : (
                    <Link>
                      <FaRegEye></FaRegEye>
                    </Link>
                  )}
                </p>
                <label className="text-sm">
                  <a href="#" className="  link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="text-red-600">{error}</p>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary font-bold text-1xl"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="form-control mt-10">
                <div className="text-center text-xs mb-2 text-red-600">
                  <h1>or Signup with</h1>
                </div>
                <button
                  onClick={handleGoogleSignin}
                  className="btn btn-outline btn-secondary"
                >
                  Login with Google{" "}
                  <span className="text-xl ml-2 text-rose-400">
                    <FaGoogle></FaGoogle>
                  </span>
                </button>
              </div>
            </form>
            <p className="my-4 text-center">
              New to Melody Music?{" "}
              <Link className="text-orange-600 font-bold" to="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
