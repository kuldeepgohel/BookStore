import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Slider from "react-slick";
import Card from "./Card";

const FreeBook = () => {
  const filterData = list.filter((item) => item.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-7 md:px-20 sm:px-4 my-20 flex flex-col ">
        <div>
        <h1 className="text-3xl font-bold pb-2">Free Offerd Books</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          commodi reprehenderit qui architecto temporibus autem impedit facilis
          aperiam expedita blanditiis.
        </p>
        </div>
      
     
     <Slider {...settings}  >
      {filterData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      </Slider>
      </div>
    </>
  );
};

export default FreeBook;
