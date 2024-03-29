import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const [createdemail, setCreatedemail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setsignUpError] = useState("");

  //   const imageHostKEy = process.env.REACT_APP_IMGB_APIKEY;
  // console.log(imageHostKEy);
  const handleSignUp = (data) => {
    // console.log(imageHostKEy)
    const photo = data.photo[0];
    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=94c2a478e54e97d802b6d035fdda4286`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        createUser(data.email, data.password).then((result) => {
          const user = result.user;
          console.log(user);
          saveUser(data.email, data.name);
          updateUserProfile(data.name, imgData.data.display_url).then(
            toast.success("user created successfully")
          );
          setLoading(false);
          navigate(from, { replace: true }).catch((err) => console.log(err));
        });
      });
    // console.log(data)
  };

  const saveUser = (email, name) => {
    const user = { email, name };
    fetch("https://note-niye-naw-server-2ndjoy.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // setCreatedemail(email);
        // console.log(data)
      });
  };

  return (
    <div className="h-[800px] text-black flex justify-center items-center">
      <div>
        <h2 className="text-2xl text-center">Sign up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Name</span>
            </label>
            <input
              className="input text-white input-bordered w-full max-w-xs"
              {...register("name", { required: "Name is required" })}
              type="text"
            />
          </div>
          {errors.name && (
            <p role="alert" className="text-warning">
              {errors.name.message}
            </p>
          )}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              className="input text-white input-bordered w-full max-w-xs"
              {...register("email", { required: "Email is required" })}
              type="email"
            />
          </div>
          {errors.email && (
            <p role="alert" className="text-warning">
              {errors.email.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Select your picture</span>
            </label>
            <input
              className="input text-white w-full max-w-xs"
              {...register("photo", { required: "Photo is required" })}
              type="file"
            />
          </div>
          {errors.photo && (
            <p role="alert" className="text-warning">
              {errors.photo.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              className="input text-white input-bordered w-full max-w-xs"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 char long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "password must be strong",
                },
              })}
            />
          </div>
          {errors.password && (
            <p role="alert" className="text-warning">
              {errors.password.message}
            </p>
          )}

          <input
            className="btn bg-blue-900 text-white w-full my-4"
            value="Sign up"
            type="submit"
          />

          {signUpError && <p className="text-red-500">{signUpError}</p>}
        </form>
        <p className="text-blue-900">
          Already have an account? Please{" "}
          <Link className="text-blue-700" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
