import React from "react";

const BrandItem = ({ img }) => {
  return (
    <div className="border p-4 border-gray-300 grid place-items-center lg:py-14">
      <img src={`/img/${img}`} className="w-auto" />
    </div>
  );
};

export default BrandItem;
