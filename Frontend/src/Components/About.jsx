import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl container mx-auto px-6 mt-28">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            About <span className="text-pink-500">Our Bookstore</span>
          </h1>
          <p className="mt-6 text-gray-300 text-justify text-lg leading-relaxed">
            At our online bookstore, we believe that reading should be
            accessible, enjoyable, and effortless. Our goal is to provide book
            lovers a wide range of books in every genre, ensuring there’s
            something for everyone.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Idea Behind Our Bookstore
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            In today’s digital age, buying books online has become a go-to
            option for readers worldwide. Our bookstore is built with the idea
            of providing:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300 mt-6">
            <li>
              A vast collection of books ranging from bestsellers to hidden
              gems.
            </li>
            <li>
              Easy navigation and search functionality to find your next read.
            </li>
            <li>
              Secure payment options and fast delivery services for a seamless
              shopping experience.
            </li>
            <li>
              Customer reviews and ratings to help you choose books with
              confidence.
            </li>
            <li>
              A personalized account area to manage your reading list and
              preferences.
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our mission is simple: to provide book enthusiasts with an
            easy-to-use platform that helps them discover, buy, and enjoy books
            they love. Whether you're looking for academic resources, fiction,
            non-fiction, or niche topics, we are committed to delivering the
            best reading experience online.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We aim to offer:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300 mt-6">
            <li>
              <strong>Curated Collections:</strong> We bring together books that
              matter, ensuring you find books that align with your interests.
            </li>
            <li>
              <strong>Affordable Pricing:</strong> We strive to make books
              accessible to everyone with competitive prices.
            </li>
            <li>
              <strong>Timely Support:</strong> Our customer service is always
              ready to assist you with any inquiries or issues you may have.
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            We are more than just a bookstore – we’re a community of readers who
            share the joy of books. Thank you for being part of our journey!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
