import React from "react";

const Card = (item) => {
    return (
    <>
     <div className="mt-4 my-3 rounded-md">
     <div className="card bg-base-100 w-92 p-3 shadow-xl hover:scale-105 duration-200">
        <figure className="h-52 w-auto rounded:md">
          <img
            src={item.item.image}
            alt="Books"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {item.item.name}
            <div className="badge badge-secondary">{item.item.category}</div>
          </h2>
          <p>{item.item.title}</p>
        </div>
        <div className="card-actions  justify-between ">
      <div className="badge badge-outline">${item.item.price}</div>
      <div className="badge badge-outline cursor-pointer px-2 py-1 hover:bg-pink-500 hover:duration-200 hover:text-white">Buy Now</div>
    </div>
      </div>
     </div>
    </>
  );
};

export default Card;
