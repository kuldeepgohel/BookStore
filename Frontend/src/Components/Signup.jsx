import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen ">
          <div className="modal-box border">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
          
            <h3 className="font-bold text-lg text-center my-2">Sign Up</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full my-2 "
              {...register("text", { required: true })}
            />
            {errors.text && (
              <span className="text-sm text-red-500">Name is required</span>
            )}{" "}
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
            )}{" "}
            <br />
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full my-2 "
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">password is required</span>
            )}
            <br />
            <button className="bg-pink-500 px-4 py-2 rounded-md text-white mt-2 ">
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
