import React from "react";

const BannerItem = ({ yazi, kategori, img, renk }) => {
  return (
    <div style={{ backgroundColor: renk }} className={` flex items-center justify-center h-[400px] md:h-[500px] w-full relative myBannerItem`}>
      <img className="w-full h-full object-cover myBannerImg " src={`/img/${img}`}   alt="" />
      <div className="absolute bottom-0 left-0 bg-white p-5 opacity-80 w-3/4 h-1/2 flex flex-col justify-around items-start">
        <span className="bg-black py-1.5 px-3 rounded-full text-sm text-white xl:text-lg">
          {kategori}
        </span>
        <h3 className="text-2xl font-bold xl:text-xl">{yazi}</h3>
        <a href="#" className="p-2 lg:p-2 rounded xl:text-base bg-red-300 text-black">
          Hemen al
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
