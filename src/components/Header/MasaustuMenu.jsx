import React, { useEffect, useRef, useState } from "react";
import ProfileItem from "./ProfileItem";
import { AnimatePresence, motion } from "framer-motion";
import FavoriItem from "./FavoriItem";
import MenuItem from "./MenuItem";

const MasaustuMenu = () => {
  const [ProfilAcikMi, setProfilAcikMi] = useState(false);
  const [favorilerAcikMi, setFavorilerAcikMi] = useState(false);
  const [sepetAcikmi, setsepetAcikmi] = useState(false);
  const [kategorilerAcikMi, setkategorilerAcikMi] = useState(false);
  const profilRef = useRef(null);
  const sepetRef = useRef(null);

  const favorilerRef = useRef(null);
  const kategoriRef = useRef(null);

  const profiliAc = () => {
    if (favorilerAcikMi) {
      setFavorilerAcikMi(false);
      setProfilAcikMi(true);
    } else if (sepetAcikmi) {
      setsepetAcikmi(false);
      setProfilAcikMi(true);
    } else if (kategorilerAcikMi) {
      setkategorilerAcikMi(false);
      setProfilAcikMi(true);
    } else {
      setProfilAcikMi(!ProfilAcikMi);
    }
  };

  const favorileriAc = () => {
    if (setFavorilerAcikMi) {
      setProfilAcikMi(false);
      setFavorilerAcikMi(true);
    } else if (sepetAcikmi) {
      setsepetAcikmi(false);
      setFavorilerAcikMi(true);
    } else if (kategorilerAcikMi) {
      setkategorilerAcikMi(false);
      setFavorilerAcikMi(true);
    } else {
      setFavorilerAcikMi(!favorilerAcikMi);
    }
  };

  const sepetiAc = () => {
    if (ProfilAcikMi) {
      setProfilAcikMi(false);
      setsepetAcikmi(true);
    } else if (favorilerAcikMi) {
      setFavorilerAcikMi(false);
      setsepetAcikmi(true);
    } else if (kategorilerAcikMi) {
      setkategorilerAcikMi(false);
      setsepetAcikmi(true);
    } else {
      setsepetAcikmi(!sepetAcikmi);
    }
  };

  const kategoriAc = () => {
    if (ProfilAcikMi) {
      setProfilAcikMi(false);
      setkategorilerAcikMi(true);
    } else if (favorilerAcikMi) {
      setFavorilerAcikMi(false);
      setkategorilerAcikMi(true);
    } else if (sepetAcikmi) {
      setsepetAcikmi(false);
      setkategorilerAcikMi(true);
    } else {
      setkategorilerAcikMi(!kategorilerAcikMi);
    }
  };

  useEffect(() => {
    const disariTiklandiginda = (event) => {
      if (
        profilRef.current &&
        !profilRef.current.contains(event.target) &&
        favorilerRef.current &&
        !favorilerRef.current.contains(event.target) &&
        sepetRef.current &&
        !sepetRef.current.contains(event.target) &&
        kategoriRef.current &&
        !kategoriRef.current.contains(event.target)
      ) {
        setProfilAcikMi(false);
        setFavorilerAcikMi(false);
        setsepetAcikmi(false);
        setkategorilerAcikMi(false);
      }
    };

    if (ProfilAcikMi || favorilerAcikMi || sepetAcikmi || kategorilerAcikMi) {
      document.addEventListener("mousedown", disariTiklandiginda);
    }

    return () => {
      document.removeEventListener("mousedown", disariTiklandiginda);
    };
  }, [ProfilAcikMi, favorilerAcikMi, sepetAcikmi, kategorilerAcikMi]);

  return (
    <div className="w-full mt-3 ">
      <div className="flex items-center container mx-auto justify-between px-6">
        <a href="/">
          <img src="/img/logo.png" alt="" />
        </a>
        <div className=" w-1/2 flex justify-center relative">
          <input
            type="text"
            placeholder="bi'şeyler ara..."
            className="border border-gray-300 py-2.5 px-4 w-full pr-28 outline-0"
          />
          <button className="border border-transparent bg-[#fdb2bb] absolute top-0 right-0 h-full px-10 cursor-pointer ">
            ara
          </button>
        </div>

        <div className="flex gap-5 items-center justify-center relative select-none ">
          <div className="relative" ref={profilRef}>
            <img
              onClick={profiliAc}
              src="/img/profile.png"
              className="size-6 cursor-pointer "
              alt=""
            />

            <AnimatePresence>
              {ProfilAcikMi && (
                <motion.div
                  initial={{ y: "-10%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="absolute right-full  -left-24  w-[180px] border border-gray-200 pt-3 mt-2 p-2 border-t-4 border-t-[#fdb2bb] flex flex-col bg-white z-20"
                >
                  <ProfileItem yazi={"Bilgilerim"} icon={"profile"} />
                  <ProfileItem yazi={"Tüm Siparişlerim"} icon={"orders"} />
                  <ProfileItem yazi={"Değerlendirmelerim"} icon={"review"} />
                  <ProfileItem yazi={"İndirim Kuponlarım"} icon={"discount"} />
                  <ProfileItem yazi={"Çıkış yap"} icon={"exit"} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div ref={favorilerRef} className="relative select-none">
            <span className="absolute text-xs bg-[#fdb2bb] w-[19px] h-[19px] rounded-full text-color flex justify-center items-center -right-3 -top-2.5">
              0
            </span>
            <img
              onClick={favorileriAc}
              src="/img/heart.png"
              className="size-6 cursor-pointer"
              alt=""
            />
            <div>
              <AnimatePresence>
                {favorilerAcikMi && (
                  <motion.div
                    initial={{ y: "-10%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="absolute right-full  -left-40  w-[250px] border border-gray-200 pt-3 mt-2 p-2 border-t-4 border-t-[#fdb2bb] flex flex-col bg-white z-20"
                  >
                    <FavoriItem />
                    <FavoriItem />
                    <FavoriItem />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div ref={sepetRef} className="relative select-none">
            <span className="absolute text-xs bg-[#fdb2bb] w-[19px] h-[19px] rounded-full text-color flex justify-center items-center -right-3 -top-2.5">
              0
            </span>

            <img
              onClick={sepetiAc}
              src="/img/shopping-bag.png"
              className="size-6 cursor-pointer"
              alt=""
            />

            <AnimatePresence>
              {sepetAcikmi && (
                <motion.div
                  initial={{ y: "-10%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="absolute right-0 top-full mt-2 z-50 w-[250px] bg-white border border-gray-200 p-2 border-t-4 border-t-[#fdb2bb] flex flex-col shadow-lg z-20"
                >
                  <FavoriItem />
                  <FavoriItem />
                  <FavoriItem />
                  <div className="p-2  justify-between w-full h-full">
                    Toplam:{" "}
                    <span className="text-red-500 font-bold">1500 TL</span>
                  </div>
                  <button className="w-full bg-[#fdb2bb] p-3  rounded  mt-1 cursor-pointer hover:opacity-85 transition-opacity">
                    Sepete git
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="bg-[#fdb2bb] w-full mt-4">
        <div></div>
        <div className="container flex justify-between mx-auto px-6 pt-2 items-center gap-2 ">
          <div className="flex">
            <div
              ref={kategoriRef}
              onClick={kategoriAc}
              className=" relative  flex bg-white items-center px-10 py-4 rounded-t-2xl"
            >
              <img  src="/img/category.png" className="mr-2 size-5"></img>
            Tüm Kategoriler
              <img
                src="/img/arrow-down.png"
                alt=""
                className="ml-2 w-4 flex justify-between"
              />
              <AnimatePresence>
                {kategorilerAcikMi && (
                  <motion.div
                    initial={{ y: "-10%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="z-20 absolute border border-gray-200 bg-white p-3 top-full left-0 w-full "
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
              </AnimatePresence>
            </div>
            <a href="/" className="p-3">
              Ana Sayfa
            </a>
            <a href="/" className="p-3">
              Hakkımızda
            </a>
            <a href="/" className="p-3">
              Bloglar
            </a>
            <a href="/" className="p-3">
              Sipariş Takip
            </a>
            <a href="/" className="p-3">
              İletişim
            </a>
          </div>
          <div className="bg-[#222222] text-white flex items-center px-10 py-3 mb-1">
            Satıcı Ol
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasaustuMenu;
