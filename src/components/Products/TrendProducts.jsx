import React from "react";
import ProductItem from "./ProductItem";
import { ProductList } from "../../constants/ProductList"; 

const TrendProducts = () => {
  const trendProducts = ProductList.filter(
    (product) => product.tur === "Trend"
  )
  return (
    <section className="container mx-auto px-6 mt-10 ">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl xl:text-2xl ">Trend Ürünler</h3>
          <span className="text-sm  flex items-center justify-center cursor-pointer text-black">
            Daha Fazla
            <img src="/img/arrow-right.png" className="w-3.5 oyna" />
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3">
          {
            trendProducts.map((product) => (<ProductItem 
              resim={product.img}
              baslik={product.baslik}
              eskiFiyat={product.eskiFiyat}
              yeniFiyat={product.yeniFiyat}
              key={product.id}/> ))
          }
          
        </div>
      </div>
    </section>
  );
};

export default TrendProducts;
