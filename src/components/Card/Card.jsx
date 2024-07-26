// Atoms/Card.js
import React from "react";

const Card = ({
  imgSrc,
  title,
  description,
  instructorImg,
  instructorName,
  instructorRole,
  price,
}) => {
  return (
    <div className="bg-white w-96 h-[426px] border rounded-lg max-w-screen-lg">
      <div className="mx-5 mt-5">
        <img
          src={imgSrc}
          className="w-[344px] h-[193px]"
          alt="Video Thumbnail"
        />
        <h2 className="mt-4">{title}</h2>
        <p className="mt-2">{description}</p>
        <div className="mt-5 flex flex-row">
          <img src={instructorImg} className="w-10 h-10" alt="Instructor" />
          <div className="ml-3">
            <h3 className="font-dm-sans font-semibold text-lg">
              {instructorName}
            </h3>
            <p>{instructorRole}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-5 mb-5">
        <img src="/img/starsssss.png" className="w-[90px]" alt="Rating" />
        <p className="font-poppins font-semibold text-2xl text-primary-500">
          {price}
        </p>
      </div>
    </div>
  );
};
export default Card;
