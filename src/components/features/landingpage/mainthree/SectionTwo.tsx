import { FaLongArrowAltLeft } from 'react-icons/fa';
import OurServices1 from '../../../../assets/images/Our-Services-1.avif';
interface props {
  OnMainThree: () => void;
}

function SectionTwo({ OnMainThree }: props) {
  return (
    <div >
      <div className="flex justify-end pl-10">
        <button onClick={() => OnMainThree()} className="bg-white flex  gap-3 ">
          برگشت
          <p className="text text-black pt-1 ">
            <FaLongArrowAltLeft />
          </p>
        </button>
      </div>

      <section>
        <h1 className=" text-center font-bold  pt-12 text-3xl">قطعات تولیدی</h1>

        <div className="flex flex-col lg:flex-row gap-10 items-center  justify-center  ">
          <div className="flex flex-col gap-4  ">
            <div className="px-16 py-6 flex flex-col  ">
              <div className="max-w-[320px] lg:max-w-[700px]   gap-5 flex flex-col ">
                <img src={OurServices1} alt="" className=" rounded-xl " />
                <div className="text-base flex-wrap justify-start">
                  مدل‌های سفارشی‌شده را برای خدمات چاپ سه‌بعدی آپلود کنید -
                  تضمین دوام و استحکام در مواد که منجر به تولید محصولات نهایی با
                  ماندگاری می‌شود. با دسترسی به طیف کامل دانش مواد BASF و مجموعه
                  گسترده، Forward AM مواد برتر را برای برآورده کردن بالاترین
                  نیازهای مشتریان فراهم می کند. پودرهای درجه صنعتی Ultrasint®
                  آزادی طراحی و سازگاری را برای ایجاد قطعات پیچیده ارائه می دهند
                  و در عین حال به اطمینان از دقت کمک می کنند. مجموعه مواد ما
                  جایگزین هایی را برای برنامه های کاربردی از نمونه های اولیه
                  کاربردی از طریق تولید سریال ارائه می دهد. فوتوپلیمرهای
                  Ultracur3D® را می توان برای تولید قطعات عملکردی با کارایی بالا
                  با استفاده از SLA، DLP یا LCD استفاده کرد. قطعات تکمیل شده
                  کیفیت سطح برتر، خواص مکانیکی طولانی مدت و وضوح جزئیات استثنایی
                  را نشان می دهند.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
