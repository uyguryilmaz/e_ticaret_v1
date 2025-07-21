import { AnimatePresence, motion } from "framer-motion";


import React, { useState } from "react";

const ProductItem = ({resim, baslik, eskiFiyat, yeniFiyat }) => {
  const [hoverOlduMu, setHoverOlduMu] = useState(false);
  return (
    <div
      onMouseEnter={() => setHoverOlduMu(true)}
      onMouseLeave={() => setHoverOlduMu(false)}
      className="flex flex-col items-center justify-center mt-5 border border-gray-300 p-3 relative myProductItem max-w-[330px]"
    >
      <img className="w-full" src={`/img/${resim}`} alt="" />
      <h3 className="mt-2 text-xl font-semibold">{baslik}</h3>
      <div className="flex items-center gap-2">
        <span className="line-through">{eskiFiyat}</span>
        <span className="font-semibold text-red-400">{yeniFiyat}</span>
      </div>

      <AnimatePresence>
        {hoverOlduMu && (
          <>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className=" absolute right-5 flex flex-col gap-3  myProductItemBox"
            >
              <a
                className="bg-white p-2 w-8 h-8 rounded cursor-pointer rounded flex items-center justify-center "
                href=""
              >
                <img src="/img/heart.png" />
              </a>
              <a
                className="bg-white p-2 w-8 h-8 rounded cursor-pointer rounded flex items-center justify-center"
                href=""
              >
                <img src="/img/resize.png" />
              </a>
              <a
                className="bg-white p-2 w-8 h-8 rounded cursor-pointer rounded flex items-center justify-center"
                href=""
              >
                <img src="/img/share.png" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className=" absolute  bottom-22 w-2/3 text-center flex flex-col gap-3 bg-[#222222] text-white"
            >
              <a className="p-3 flex items-center justify-center gap-3">
               <img src="/img/cart2.png" className="size-6"/> Sepete Ekle</a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductItem;
