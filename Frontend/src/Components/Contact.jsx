import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
const ACCESS_KEY =import.meta.env.VITE_ACCESS_KEY;
import { toast } from "react-hot-toast";


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border p-4 rounded-lg border-slate-300"
        >
          <h3 className="font-bold text-lg text-center">Contact Us</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="input input-bordered w-full my-2"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">Name is required</span>
          )}
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="input input-bordered w-full my-2"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">Email is required</span>
          )}
          <br />

          <label htmlFor="message">Message</label>
          <textarea
            className="input input-bordered w-full mt-2 resize-none"
            placeholder="Enter your message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="text-sm text-red-500">Message is required</span>
          )}
          <br />

          <div className="items-center justify-center flex">
            <button className="bg-pink-500 px-4 py-2 rounded-md text-white mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
