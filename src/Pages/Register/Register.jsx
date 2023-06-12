import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/images/logo.png";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");

  const { createUser, userProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    setError("");

    if (password.length < 6) {
      setError("Your password must be at least Six charecters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        userProfile(name, photo)
          .then(() => {
            console.log("user info");
          })
          .catch((error) => console.log(error));
        form.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Melody Music | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 login-container mt-10 mb-10 rounded-2xl">
        <div className="hero-content flex-col gap-4">
          <div className=" w-16 flex justify-center">
            <img className="rounded-lg" src={logo} alt="" />
          </div>
          <div className=" w-full space-y-5">
            <h1 className="text-center">
              <span className=" text-2xl text-sky-900 font-bold">
                Welcome to
              </span>{" "}
              <br />{" "}
              <span className=" text-4xl text-purple-500 font-extrabold">
                Melody Music School
              </span>
            </h1>
            <p className=" text-lg font-semibold text-sky-900 text-center">
              Please Sign up to continue access
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <h1 className="text-5xl font-bold text-center mb-10 text-purple-500">
                Sign up{" "}
              </h1>
              <form onSubmit={handleSignup}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="photo"
                    placeholder="photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <p className="text-red-500">{error}</p>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-secondary font-bold text-1xl"
                    type="submit"
                    value="Sign up"
                  />
                </div>
              </form>

              <p className="my-4 text-center">
                Already have an account?{" "}
                <Link className="text-orange-600 font-bold" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
