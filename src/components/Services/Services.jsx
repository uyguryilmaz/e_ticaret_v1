import React from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section className="container mx-auto px-6 mt-10 w-full ">
      <div className="bg-gray-500 bg-[url('/img/service-bg.png')] bg-no-repeat bg-cover bg-center grid md:grid-cols-2 md:p-10 md:gap-4 xl:grid-cols-4" >
      <ServiceItem
        icon={"shipping.png"}
        baslik={"ücretsiz Kargo"}
        yazi={"500 tl ye kadar olan siparişlerde kargo bedava"}
      />
      <ServiceItem
        icon={"return.png"}
        baslik={"Ücretsiz İade"}
        yazi={"30 gün içerisinde koşulsuz iade garantisi"}
      />
      <ServiceItem
        icon={"secure.png"}
        baslik={"Güvenli Ödeme"}
        yazi={"%100 güvenli ve online ödeme kolaylığı"}
      />
      <ServiceItem
        icon={"best.png"}
        baslik={"En iyi Kalite"}
        yazi={"Tüm ürünlerde orjinal ürün garantisi"}
      />
      </div>
    </section>
  );
};

export default Services;
