import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import list from "../../public/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";
const Course = () => {

  return (
    <>
      <Navbar/>
      <div className="max-w-screen-2xl container mx-auto px-10">
        <div className=" mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">We're delighted to have you <span className="text-pink-500"> here !!</span></h1>
          <p className="mt-12 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aliquid ipsam nam. Veniam suscipit aliquid tempore cumque quo incidunt sunt culpa quasi tempora, adipisci nulla possimus sint facilis officia magnam.</p>
         <Link to="/">
         <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600 hover:duration-300 text-white mt-6">Back</button>
         </Link>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-12">
            {
                list.map((item)=>{
                    return <Card item={item} key={item.id}/>
                })
            }
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Course;
