import React from "react";
import BannerItem from "./BannerItem";

const Banners = () => {
  return (
    <section className="container mt-7 mx-auto px-6 flex flex-col gap-5 md:flex-row ">
      <BannerItem
        yazi={"Yeni Tarzları Hemen keşfet"}
        img={"banner1.png"}
        kategori={"Yeni Gelenler"}
        renk={"#AEE6EC"}
      />
      <BannerItem
        yazi={"Tarzını kendin belirle"}
        img={"banner2.png"}
        kategori={"Yeni Gelenler"}
        renk={"#C2D7F0"}
      />
      <BannerItem
        yazi={"Trendleri Yakala"}
        img={"banner3.1.png"}
        kategori={"Yeni Gelenler"}
        renk={"#FEE7C4"}
      />
    </section>
  );
};

export default Banners;
