import React from "react";

const Discount = () => {
  return (
    <section className="w-full mt-32 relative bg-[url('/img/discount-banner-bg.jpg')] bg-cover bg-center ">
      <div className="container mx-auto h-[320px] relative">
        <img
          src="/img/discount-banner.png "
          className="hidden xl:block absolute left-[3%] -top-20 h-[400px] object-contain"
          alt=""
        />
        <div className=" absolute right-0 xl:right-[20%] top-1/2 -translate-y-1/2 w-full px-6 xl:w-[600px]">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
              <span className="text-red-500 font-bold">%20</span> indirimi
              kapmak için
            </h3>
            <p className="text-gray-600 text-sm">E-postanızı kaydedin</p>

            <div className="flex flex-col justify-center w-full sm:flex-row mt-2 gap-2 sm:gap-0">
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-posta adresi"
                  className="w-full px-12 py-3 border-0 outline-0 bg-white"
                />
                <img
                  src="/img/mail.png"
                  className="absolute left-4 top-1/2 -translate-y-1/2 size-5"
                />
              </div>
            </div>

            <button className="w-full sm:w-auto px-6 py-3 bg-[#fdb2bb] hover:bg-[#f79aa5]transition-all">
              Kuponu Al
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
