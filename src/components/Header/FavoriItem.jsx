import React from "react";

const FavoriItem = () => {
  return (
    <div className="flex justify-start items-center gap-4 my-2 border-b border-b-gray-200 last:border-b-0">
      <img src="/img/urun1.jpg" className="w-[70px]" />
      <div>
        <h3 className="font-semibold">Ürün Başlığı</h3>
        <span className="text-sm">500 TL</span>
      </div>
      <img src="/img/close.png" className="w-[20px]" />
    </div>
  );
};

export default FavoriItem;
