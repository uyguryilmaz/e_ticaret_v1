import React from "react";
import BrandItem from "./BrandItem";

const Brands = () => {
  return (
    <section className="container mx-auto px-6 mt-10">
      <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        <BrandItem img={"brand-1.png"} />
        <BrandItem img={"brand-2.png"} />
        <BrandItem img={"brand-3.png"} />
        <BrandItem img={"brand-4.png"} />
        <BrandItem img={"brand-5.png"} />
        <BrandItem img={"brand-6.png"} />
        <BrandItem img={"brand-7.png"} />
        <BrandItem img={"brand-8.png"} />
        <BrandItem img={"brand-9.png"} />
        <BrandItem img={"brand-10.png"} />
        <BrandItem img={"brand-11.png"} />
        <BrandItem img={"brand-12.png"} />
      </div>
    </section>
  );
};

export default Brands;
