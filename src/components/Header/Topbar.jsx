import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
const Topbar = () => {
  const [dillerAcikMi, setDillerAcikMi] = useState(false);
  const [paralarAcikMi, setParalarAcikMi] = useState(false);

  const [seciliDil, setseciliDil] = useState("Türkçe");
  const [seciliPara, setseciliPara] = useState("TRY");

  const dillerRef = useRef(null);
  const paralarRef = useRef(null);

  useEffect(() => {
    const kayitliDil = localStorage.getItem("secilenDil");
    const kayitliPara = localStorage.getItem("secilenPara");

    if (kayitliDil) setseciliDil(kayitliDil);
    if (kayitliPara) setseciliPara(kayitliPara);
  }, []);

  useEffect(() => {
    const disariTiklandiginda = (event) => {
      if (
        dillerRef.current &&
        !dillerRef.current.contains(event.target) &&
        paralarRef.current &&
        !paralarRef.current.contains(event.target)
      ) {
        setDillerAcikMi(false);
        setParalarAcikMi(false);
      }
    };
    document.addEventListener("mousedown", disariTiklandiginda);

    return () => {
      document.removeEventListener("mousedown", disariTiklandiginda);
    };
  }, []);

  const dilleriGoster = () => {
    if (paralarAcikMi) {
      setParalarAcikMi(false);
      setDillerAcikMi(true);
    } else {
      setDillerAcikMi(!dillerAcikMi);
    }
  };

  const paralariGoster = () => {
    if (dillerAcikMi) {
      setDillerAcikMi(false);
      setParalarAcikMi(true);
    } else {
      setParalarAcikMi(!paralarAcikMi);
    }
  };

  const diliSec = (dil) => {
    setseciliDil(dil);
    localStorage.setItem("secilenDil", dil);
  };

  const paraSec = (para) => {
    setseciliPara(para);
    localStorage.setItem("secilenPara", para);
  };

  return (
    <div className="shadow">
        <div className=" flex  max-w-[1400px] container mx-auto justify-center md:justify-between items-center px-3 ">
          <div className="md:flex hidden justify-start items-center gap-5 text-sm ">
            <a href="">Hesap</a>
            <a href="">Sipariş takip</a>
            <a href="">Destek</a>
          </div>
          <div
            ref={dillerRef}
            className=" flex justify-start items-center gap-5 text-sm "
          >
            <div
              onClick={dilleriGoster}
              href=""
              className=" flex items-center cursor-pointer justify-center gap-1 relative p-2.5 select-none"
            >
              <img src={`/img/${seciliDil}.png`} className="size-6 " alt="" />
              {seciliDil}
              <img src="/img/arrow-down.png" className="size-3" alt="" />
              <AnimatePresence>
                {dillerAcikMi && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute top-full left-0 border border-gray-200 rounded w-full flex flex-col z-20 bg-white"
                  >
                    <span
                      onClick={() => diliSec("Türkçe")}
                      className="px-2 py-1.5 flex gap-2 justify-start items-center"
                    >
                      <img src="/img/Türkçe.png" className="size-6 " alt="" />
                      Türkçe
                    </span>
                    <span
                      onClick={() => diliSec("English")}
                      className="px-2 py-1.5 flex gap-2 justify-start items-center"
                    >
                      <img src="/img/English.png" className="size-6 " alt="" />
                      English
                    </span>
                    <span
                      onClick={() => diliSec("Français")}
                      className="px-2 py-1.5 flex gap-2 justify-start items-center"
                    >
                      <img src="/img/Français.png" className="size-6 " alt="" />
                      Français
                    </span>
                    <span
                      onClick={() => diliSec("Deutch")}
                      className="px-2 py-1.5 flex gap-2 justify-start items-center"
                    >
                      <img src="/img/Deutch.png" className="size-6 " alt="" />
                      Deutch
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              ref={paralarRef}
              onClick={paralariGoster}
              className="flex  items-center justify-center gap-1 relative p-2.5"
            >
              <img src="/img/currency.png" className="size-6 " alt="" />
              {seciliPara}
              <img src="/img/arrow-down.png" className="size-3" alt="" />
              <AnimatePresence>
                {paralarAcikMi && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute top-full right-1 border border-gray-200 rounded w-full flex flex-col z-20 bg-white"
                  >
                    <span
                      onClick={() => paraSec("TRY")}
                      className="px-2 py-1.5 flex gap-2 justify-start items-center"
                    >
                      <img src="/img/Türkçe.png" className="size-6 " alt="" />
                      TRY
                    </span>
                    <span
                      onClick={() => paraSec("USD")}
                      className="px-2 py-1.5 flex gap-2 justify-start items-center"
                    >
                      <img src="/img/English.png" className="size-6 " alt="" />
                      USD
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Topbar;
