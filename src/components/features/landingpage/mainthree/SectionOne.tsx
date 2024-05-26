import OurServices1 from '../../../../assets/images/Our-Services-1.avif';

import OurServices2 from '../../../../assets/images/Our-Services-3.avif';
import OurServices3 from '../../../../assets/images/Our-Services-1.avif';
import { FaLongArrowAltLeft } from 'react-icons/fa';
interface props {
  Onservices: () => void;
  OnPrototyping: () => void;
  onEcommerceintegration: () => void;
}

function SectionOne({
  Onservices,
  OnPrototyping,
  onEcommerceintegration,
}: props) {
  return (
    <div>
      <section>
        <h1 className=" text-center font-bold  pt-12 text-3xl">سرویس های ما</h1>
        <div className="flex flex-col justify-center lg:flex-row gap-10 ">
          <div className="flex flex-col gap-4 border-b-2 border-red1">
            <div className="px-16 py-6 flex flex-col items-center">
              <div className="max-w-[320px] lg:max-w-[280px]   gap-5 flex flex-col ">
                <img src={OurServices1} alt="" className=" rounded-xl " />
                <div className="text-xl font-bold justify-start ">
                  قطعات تولیدی
                </div>
                <div className="text-base flex-wrap justify-start">
                  مدل‌های سفارشی‌شده را برای خدمات چاپ سه‌بعدی آپلود کنید -
                  تضمین دوام و استحکام در مواد که منجر به تولید محصولات نهایی با
                  ماندگاری می‌شود.
                </div>
              </div>
            </div>
            <button
              onClick={() => Onservices()}
              className="bg-white flex flex-row gap-3 "
            >
              سرویس های ما
              <p className="text text-red1 pt-1 ">
                <FaLongArrowAltLeft />
              </p>
            </button>
          </div>

          
          <div className="flex flex-col   gap-4  border-b-2 border-red1">
            <div className="px-16 flex flex-col py-6 items-center">
              <div className="max-w-[320px] lg:max-w-[280px] gap-5 flex flex-col ">
                <img src={OurServices2} alt="" className=" rounded-xl " />
                <div className="text-xl font-bold justify-start ">
                  نمونه سازی سریع
                </div>
                <div className="text-base flex-wrap justify-start">
                  با خدمات پرینت سه بعدی برای مدل‌های با کارایی بالا که در
                  جلسات، آزمایش‌ها و تکمیل قطعات نهایی استفاده می‌شوند.
                </div>
              </div>
            </div>
            <button
              onClick={() => OnPrototyping()}
              className="bg-white flex flex-row gap-3 "
            >
              خدمات نمونه سازی
              <p className="text text-red1 pt-1 ">
                <FaLongArrowAltLeft />
              </p>
            </button>
          </div>
          
          <div className="flex flex-col  gap-4 border-b-2 border-red1">
            <div className="px-16 py-6 items-center flex flex-col">
              <div className="max-w-[320px] lg:max-w-[280px] gap-5 flex flex-col ">
                <img src={OurServices3} alt="" className=" rounded-xl " />
                <div className="text-xl font-bold justify-start ">
                  ادغام تجارت الکترونیک
                </div>
                <div className="text-base flex-wrap justify-start">
                  با اتصال به پلتفرم از طریق API، Shopify، یا Etsy ادغام های
                  تجارت الکترونیکی، کسب و کار خود را از طریق بازار ما راه اندازی
                  کنید.
                </div>
              </div>
            </div>
            <button
              onClick={() => onEcommerceintegration()}
              className="bg-white flex flex-row gap-3  "
            >
              ادغام تجارت الکترونیک
              <p className="text text-red1 pt-1">
                <FaLongArrowAltLeft />
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionOne;
