import Button from '../../../../components/common/Button/index';
import one from '../../../../assets/images/Mainthree1.svg';
import two from '../../../../assets/images/MainThree2.svg';
import three from '../../../../assets/images/mainthree3.svg';
import { FaLongArrowAltLeft } from 'react-icons/fa';
interface props {
  Onqoute: () => void;
  Onmainone: () => void;
}

function SectionThree({ Onqoute, Onmainone }: props) {
  return (
    <div>
      <div className="flex justify-end pl-10">
        <button onClick={() => Onmainone()} className="bg-white flex  gap-3 ">
          برگشت
          <p className="text text-black pt-1 ">
            <FaLongArrowAltLeft />
          </p>
        </button>
      </div>

      <section className="flex items-center  mt-6 flex-col justify-center gap-6">
        <h1 className="justify-center text-center text-3xl font-bold ">
          چطوری کار میکنه ؟
        </h1>
        <div className="flex-col lg:flex-row flex items-center">
          <div className="flex flex-col justify-center items-center gap-4 mt-4 px-16">
            <div className="text-lg  font-bold">
              مدل های سه بعدی خود را آپلود کنید و پیکربندی را شروع کنید
            </div>
            <img src={one} alt="" className="max-w-[200px]" />
            <div className="text-base  flex-wrap max-w-[400px]">
              ما بیش از 35 فرمت فایل از جمله STL، OBJ، STEP، ZIP را پشتیبانی می
              کنیم. همه آپلودها ایمن و محرمانه هستند.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-4 px-16">
            <div className="text-lg font-bold ">
              متریال ، ضخامت ، تراکم و ابعاد را انتخاب کنید
            </div>
            <img src={two} alt="" className="max-w-[200px]" />
            <div className="text-base flex-wrap max-w-[400px]">
              کاتالوگ ما شامل بیش از 20 تکنولوژی مختلف و بیش از 100 ماده، با
              انواع رنگ های مختلف و گزینه های مختلف است.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-4 px-16">
            <div className="text-lg font-bold ">
              بهترین پیشنهاد را انتخاب کنید و قطعات خود را تحویل بگیرید
            </div>
            <img src={three} alt="" className="max-w-[200px]" />
            <div className="text-base flex-wrap max-w-[400px]">
              سازنده مورد نظر خود را انتخاب کنید و سفارش خود را سریع و بدون
              دردسر دریافت کنید.
            </div>
          </div>
        </div>
        <Button
          onClick={() => Onqoute()}
          className="w-52 mb-4 rounded-xl bg-red  uppercase leading-normal text-neutral-50 "
        >
          <span className="font-bold text-sm">تخمین قیمت</span>
        </Button>
      </section>
    </div>
  );
}

export default SectionThree;
