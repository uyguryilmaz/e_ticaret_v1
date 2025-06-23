import React from "react";

const MenuItem = ({ icon, yazi }) => {
  return (
    <div className="text-sm py-2 flex items-center justify-between hover:bg-red-100">
      <div className="flex justify-center items-center gap-2">
        <img src={`/img/${icon}.png`} className="size-5" alt="" />
        {yazi}
      </div>
      <img src="/img/arrow-right.png" className="size-4" alt="" />
    </div>
  );
};

export default MenuItem;
