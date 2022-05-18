import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          nobis odit dicta quod inventore iusto?
        </p>
      </div>
      <div className="p-3 flex  items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
            <img src={review.img} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-xl ">{review.name}</h2>
          <h2 className="  ">{review.location}</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
