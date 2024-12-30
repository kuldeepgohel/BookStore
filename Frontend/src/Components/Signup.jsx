import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
const SIGNUP_URL = import.meta.env.SIGNUP_URL;
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${SIGNUP_URL}`, userInfo)
      .then((res) => {
        toast.success("Signup Successfully");
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen ">
          <div className="modal-box border">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-4xl my-2">Sign Up</h3>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full my-2 "
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">Name is required</span>
              )}
              <br />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full my-2 "
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">email is required</span>
              )}
              <br />
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full my-2 "
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  password is required
                </span>
              )}
              <br />
              <button className="bg-pink-500 px-4 py-2 mb-3 rounded-md text-white mt-2 ">
                Signup
              </button>
              <p className=" text-center  items-center justify-center flex">
                Have you an account?
                <button
                  className="text-pink-500"
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
        <Login />
      </div>
    </>
  );
};

export default Signup;
