import React from 'react'
import { useState } from "react";
import MenuItem from "./MenuItem";
import { AnimatePresence, motion } from "framer-motion";

const MobilMenu = () => {
    const [menuAcikMi, setmenuAcikMi] = useState(false);
  const [kategoriMiAcik, setKategoriMiAcik] = useState(true);
  const [menuMuAcik, setmenuMuAcik] = useState(false);

  const menuAc = () => {
    setmenuAcikMi(!menuAcikMi);
  };

  return (
    <div className="p-2 flex justify-around items-center relative">
      <img src="/img/menu.png" onClick={menuAc} className="size-10" alt="" />
      <img src="/img/logo.png" alt="" />
      <div className="relative">
        <span className="absolute text-xs bg-[#fdb2bb] w-[19px] h-[19px] rounded-full text-color flex justify-center items-center -right-3 -top-2.5">
          0
        </span>
        <img src="/img/shopping-bag.png" className="size-5" alt="" />
      </div>
      

      <AnimatePresence>
        {menuAcikMi && (
          <>
            <motion.div
              onClick={() => setmenuAcikMi(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="backdrop-blur-sm  fixed inset-0 z-10 bg-black/30"
            ></motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={"spring"}
              className={`fixed z-20 left-0 top-0 bg-white w-[85vw] h-screen p-5 flex flex-col gap-5`}
            >
              <div className="flex justify-between ">
                <div className="flex justify-start w-full gap-5">
                  <img src="/img/user.png" className="size-7" alt="" />
                  <div className="relative">
                    <span className="absolute text-xs bg-[#fdb2bb] w-5 h-5 rounded-full text-color flex justify-center items-center -right-3 -top-2.5">
                      0
                    </span>
                    <img src="/img/heart.png" className="size-7" alt="" />
                  </div>
                </div>
                <img
                  src="/img/close.png"
                  onClick={() => setmenuAcikMi(false)}
                  className="size-8"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center relative">
                <input
                  type="text"
                  placeholder="bir şeyler ara.."
                  className="border border-gray-200 py-1 px-2 pr-14  w-full placeholder:text-sm outline-0"
                />
                <button className="bg-[#fdb2bb] border-amber-300 py-1 px-2 border absolute right-0">
                  ara
                </button>
              </div>

              <div className="flex gap-3">
                <span
                  onClick={() => {
                    setmenuMuAcik(false);
                    setKategoriMiAcik(true);
                  }}
                  className={`${
                    kategoriMiAcik ? "text-black" : "text-gray-400 "
                  }`}
                >
                  Kategoriler
                </span>
                <span>|</span>
                <span
                  onClick={() => {
                    setKategoriMiAcik(false);
                    setmenuMuAcik(true);
                  }}
                  className={`${menuMuAcik ? "text-black" : "text-gray-400"}`}
                >
                  Menü
                </span>
              </div>

              {kategoriMiAcik && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="overflow-auto"
                >
                  <MenuItem icon={"dress"} yazi="Elbise" />
                  <MenuItem icon={"tshirt"} yazi="tişört" />
                  <MenuItem icon={"shirt"} yazi="gömlek" />
                  <MenuItem icon={"jeans"} yazi="Kot Pantolon" />
                  <MenuItem icon={"denim-jacket"} yazi="Kot Ceket" />
                  <MenuItem icon={"trousers"} yazi={"pantolon"} />
                  <MenuItem icon={"coat"} yazi={"Mont"} />
                  <MenuItem icon={"blouse"} yazi={"Bluz"} />
                  <MenuItem icon={"leather-jacket"} yazi={"Ceket"} />
                  <MenuItem icon={"skirt"} yazi={"Etek"} />
                  <MenuItem icon={"plus"} yazi={"Büyük Beden"} />
                  <MenuItem icon={"coat2"} yazi={"Kaban"} />
                  <MenuItem icon={"cardigan"} yazi={"Hırka"} />
                </motion.div>
              )}
              {menuMuAcik && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="overflow-auto"
                >
                  <MenuItem icon={"home"} yazi="Ana Sayfa" />
                  <MenuItem icon={"about"} yazi="Hakkımızda" />
                  <MenuItem icon={"blogs"} yazi="Bloglar" />
                  <MenuItem icon={"location"} yazi="Lokasyon" />
                  <MenuItem icon={"contact"} yazi="İletişimw" />
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobilMenu