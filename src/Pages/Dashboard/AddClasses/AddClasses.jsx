import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/UseAuth";
// import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClasses = () => {
  const { user } = useAuth();
  //   console.log(user);
  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        console.log(imgRes);
      });
  };
  console.log(errors);

  //

  // fetch("https://toy-market-server-wine.vercel.app/toystore", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(newClasses),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     if (data.insertedId) {
  //       Swal.fire({
  //         title: "Success!",
  //         text: "Class added Successfully",
  //         icon: "success",
  //         confirmButtonText: "Cool",
  //       });
  //     }
  //   });
  // form.reset();
  // };
  return (
    <div className=" w-full p-5">
      <Helmet>
        <title>Melody Music | Add Classes</title>
      </Helmet>

      <div className="bg-gradient-to-r from-indigo-100 from-10% via-sky-300 via-30% to-emerald-200 to-90% p-24 mt-10 mb-10 rounded-md">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-purple-500">
          Add a Class
        </h2>
        <hr />
        <p className=" text-center text-stone-500 font-semibold mb-10 mt-10">
          Here you can add your Experience. Just read our terms & condition
          about this adding policy.
        </p>
        <hr />
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mb-8 mt-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Class name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  // name="name"
                  placeholder="Class name"
                  {...register("music_class_name", {
                    required: true,
                    maxLength: 80,
                  })}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Class image</span>
              </label>
              <label className=" w-full">
                <input
                  type="file"
                  // name="photo"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered file-input-info w-full max-w-2xl"
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex mb-8 mt-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  // name="instructor_name"
                  placeholder="Your name"
                  {...register("instructor_name", {
                    required: true,
                    maxLength: 80,
                  })}
                  className="input input-bordered w-full"
                  value={user.displayName}
                  readOnly
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Your email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  // name="email"
                  {...register("email", { required: true })}
                  placeholder="Your email"
                  className="input input-bordered w-full"
                  value={user.email}
                  readOnly
                />
              </label>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  // name="seats"
                  placeholder="Available seats"
                  {...register("seats", { required: true })}
                  className="input input-bordered w-full"
                  // required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  // name="price"
                  placeholder="price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full"
                  // required
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add A Class"
            className="btn btn-primary btn-outline btn-block mt-10"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClasses;
