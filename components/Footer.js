import Image from "next/image";
import newLogo from "../public/newLogo.png";
import logoInsta from "../public/logoInsta.png";
import logoFace from "../public/logoFace.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full text-slate-500">
      {/*      <!-- Main footer --> */}
      <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
        <div className="container  mx-auto px-6">
          <div className="ml-12  grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 max-lg:ml-[15%] max-md:ml-0">
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3"
              aria-labelledby="footer-product-5-logo-sub"
            >
              <h3
                className="mb-6 text-base font-medium text-slate-700"
                id="footer-product-5-logo-sub"
              >
                Blog
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Inicio
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/product"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Productos
                  </a>
                </li>

                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/contact"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Contacto
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/buy"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Como comprar
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/information"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Informacion
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3"
              aria-labelledby="footer-product-5-logo-sub"
            >
              <h3
                className="mb-6 text-base font-medium text-slate-700"
                id="footer-product-5-logo-sub"
              >
                Nuestros Locales
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Humberto+1%C2%BA+543,+C%C3%B3rdoba/@-31.407657,-64.1925885,17z/data=!3m1!4b1!4m5!3m4!1s0x9432987c1069a5d1:0xbd3e85ad3b9584e3!8m2!3d-31.4076616!4d-64.1900136?entry=ttu"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Humberto primo 543
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Juan+A.+Sarachaga+742,+X5000AMP+C%C3%B3rdoba/@-31.3911795,-64.1870112,17z/data=!3m1!4b1!4m6!3m5!1s0x94329867f5fdb311:0x3bf8d11d27e6c0ca!8m2!3d-31.3911841!4d-64.1844363!16s%2Fg%2F11g9jp5qwv?entry=ttu"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Juan A. Sarachaga 742
                  </a>
                </li>

                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Juan+A.+Sarachaga+742,+X5000AMP+C%C3%B3rdoba/@-31.3911795,-64.1870112,17z/data=!4m6!3m5!1s0x94329867f5fdb311:0x3bf8d11d27e6c0ca!8m2!3d-31.3911841!4d-64.1844363!16s%2Fg%2F11g9jp5qwv?entry=ttu"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Río de Janeiro 137 local 8
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3"
              aria-labelledby="footer-product-5-logo-sub"
            >
              <h3
                className="mb-6 text-base font-medium text-slate-700"
                id="footer-product-5-logo-sub"
              >
                Telefonos
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    351-154323433
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/product"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    351-154323433
                  </a>
                </li>

                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/contact"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    351-154323433
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3"
              aria-labelledby="footer-product-5-logo-sub"
            >
              <h3
                className="mb-6 text-base font-medium text-slate-700"
                id="footer-product-5-logo-sub"
              >
                Productos
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Lentes de sol
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/product"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Armazones
                  </a>
                </li>

                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/contact"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Clip on
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    target="_blank"
                    href="/buy"
                    className="transition-colors duration-300 hover:text-yellow-400 focus:text-yellow-600"
                  >
                    Lentes de contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/*      <!-- Sub Footer --> */}
      <div className=" bg-slate-200 flex justify-between items-center p-2">
        <div className="w-auto h-auto px-20 max-md:px-2 ">
          <Image src={newLogo} alt="Logo divisar" className="w-16 h-auto" />
        </div>
        <div className="w-1/2 flex gap-9  max-md:w-2/3 ">
          <div className="border p-2  border-slate-400  rounded-full transition-all duration-200 ease-linear hover:bg-yellow-300">
            {" "}
            <a href="https://www.facebook.com/Optica-Divisar-331247507459540/">
              <Image src={logoInsta} className="w-6 h-auto" />
            </a>
          </div>
          <div className="border p-2 border-slate-400  rounded-full transition-all duration-200 ease-linear hover:bg-yellow-300">
            <a href="https://www.facebook.com/Optica-Divisar-331247507459540/">
              <Image src={logoFace} className="w-6 h-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
