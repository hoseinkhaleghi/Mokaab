import { IoLogoLinkedin } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-darkblue p-4 text-white ">
        <div className="lg:flex lg:flex-row lg:gap-8">
          <div className="gap-3 lg:flex lg:flex-col md:justify-center ">
            <h1 className=" font-bold text-xl">آماده ای برای شروع</h1>
            <p className="font-medium text-sm">
              از توسعه محصول گرفته تا تولید سه بعدی صنعتی، ما می توانیم به شما
              در گسترش کسب و کارتان کمک کنیم.
            </p>
            <Link to="tel:+989129274652">
              <Button className="w-60 rounded-xl bg-red  uppercase leading-normal text-neutral-50 ">
                <span className="font-normal text-sm"> با ما تماس بگیرید</span>
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row  sm:gap-32 md:gap-16 ">
            <div className="flex  flex-row gap-20 sm:gap-32 md:gap-20">
              <div>
                <h1 className="text-xl font-bold pt-5 ">خدمات</h1>
                <ul className="text-sm pt-2 ">
                  <li className="flex-1">طراحی سه بعدی</li>
                  <li>پرینت سه بعدی</li>
                  <li>تولید افزودنی</li>
                  <li>راهنمای مواد سه بعدی</li>
                </ul>
              </div>
              <div>
                <h1 className="text-xl font-bold pt-5 ">مکعب</h1>
                <ul className="text-sm pt-2 ">
                  <Link to="/about" className="flex flex-row justify-start">
                    <li>درباره ما</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 pt-10 ">
          <div className="flex gap-2  py-3">
            <IoLogoLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>

          <div className="py-3 ">
            <h1 className="text-xl font-bold">مکعب</h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
