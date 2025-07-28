import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[url('/img/footer-bg.png')] bg-cover bg-center text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="text-2xl font-bold">
              G <span className="text-[#fdb2bb]">Shop</span>
            </a>
          </div>

          <div>
            <ul className="space-y-4">
              <li>
                <a href="">Ana Sayfa</a>
              </li>
              <li>
                <a href="">Hakkımızda</a>
              </li>
              <li>
                <a href="">Bloglar</a>
              </li>
              <li>
                <a href="">İletişim</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              <li>
                <a href="">Sipariş Takip</a>
              </li>
              <li>
                <a href="">Hesap</a>
              </li>
              <li>
                <a href="">Destek</a>
              </li>
              <li>
                <a href="">Satıcı Ol</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              <li>
                <a href="">Elbbise</a>
              </li>
              <li>
                <a href="">Kazak</a>
              </li>
              <li>
                <a href="">Mont</a>
              </li>
              <li>
                <a href="">Ceket</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex gap-3 items-center">
              <a href=""><img src="/img/instagram.png" alt="" className="size-7" /></a>
              <a href=""><img src="/img/facebook.png" alt="" className="size-7"/></a>
              <a href=""><img src="/img/youtube.png" alt=""  className="size-7"/></a>
            </div>
            <span className="text-xs text-gray-400 text-center px-2 py-1 "> 
                Tüm Hakları Saklıdır
            </span>
          </div>
          <div>
            <img src="/img/footer-payment.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
