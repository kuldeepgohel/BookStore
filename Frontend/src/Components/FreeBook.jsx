import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";
const BOOK_URL = import.meta.env.VITE_BOOK_URL;
const FreeBook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get(`${BOOK_URL}`);
        setBook(response.data.filter((item) => item.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    lazyLoad: "ondemand",
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
            commodi reprehenderit qui architecto temporibus autem impedit
            facilis aperiam expedita blanditiis.
          </p>
        </div>

        <Slider {...settings}>
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FreeBook;
