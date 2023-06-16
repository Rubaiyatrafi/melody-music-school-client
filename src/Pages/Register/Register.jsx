import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/images/logo.png";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");

  const { createUser, userProfile, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmpass = form.confirmpass.value;
    console.log(name, email, photo, password, confirmpass);

    setError("");
    if (password !== confirmpass) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Your password must be at least Six charecters");
      return;
    } else if (!/(?=.*[!@#$&*]) /.test(password)) {
      setError("Please add at least one special charecter");
      return;
    } else if (!/(?=.*[A-Z]) /.test(password)) {
      setError("Please add at least one uppercase");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        userProfile(name, photo)
          .then(() => {
            const saveUser = { name: name, email: email, photo: photo };
            console.log("user info");
            fetch("https://melody-music-school-server-xi.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  form.reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Register Successfull",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          })
          .catch((error) => console.log(error));

        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photo: loggedUser.photoURL,
        };
        fetch("https://melody-music-school-server-xi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Register Successfull",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="confirmpass"
                    placeholder="Confirm password"
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
