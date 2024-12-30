import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/login", userInfo)
      .then((res) => {
        toast.success('Login Successfully');
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                onClick={() => document.getElementById("my_modal_3").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full my-2 "
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">Email is required</span>
              )}{" "}
              <br />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full my-2"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  password is required
                </span>
              )}{" "}
              <br />
              <button className="bg-pink-500 px-4 py-2 rounded-md text-white mt-2 ">
                {" "}
                Login
              </button>
              <p className=" text-center  items-center justify-center flex">
                Not registered?
                <Link to="/signup" className="text-pink-500">
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
