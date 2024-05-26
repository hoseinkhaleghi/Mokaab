import nikk from '../../../assets/images/Nikk Wong.jpg';
import Neil from '../../../assets/images/Neil Ramsay.jpg';
import Sus from '../../../assets/images/Susan Kawa.jpg';

function Customers() {
  return (
    <div>
      <h1 className="text-xl text-center py-5">آنچه مشتریان ما می گویند</h1>

      <section className="flex flex-col md:flex-row  md:justify-center py-5 items-center p-8 gap-4">
        <div className="bg-stone-300 rounded-xl  md:w-52 md:h-80 lg:w-72 lg:h-64 ">
          <div className=" flex flex-row px-8 py-3">
            <div className="">
              <img
                src={nikk}
                alt=""
                className=" rounded-full max-w-[50px] max-h-[50px]"
              />
            </div>
            <div className="flex flex-col justify-start py-2 px-3">
              <h1 className=" text-sm font-bold">نیک وانگ</h1>
              <p className=" text-xs  ">مهندس، جونی</p>
            </div>
          </div>
          <p className=" pb-4 text-sm px-8">
            هفته‌ها را صرف پریدن از یک وب‌سایت به وب‌سایت دیگر می‌کردم تا
            فروشندگانی را پیدا کنم که بتوانند به سرعت نمونه‌های اولیه مقرون به
            صرفه و بادوام را ارائه دهند. پس از یافتن کرافت کلود، هرگز مجبور نشدم
            جای دیگری را جستجو کنم.
          </p>
        </div>

        <div className="bg-stone-300 rounded-xl md:w-52 md:h-80 lg:w-72 lg:h-64  ">
          <div className=" flex flex-row px-8 py-3">
            <div className="">
              <img
                src={Sus}
                alt=""
                className=" rounded-full max-w-[50px] max-h-[50px]"
              />
            </div>
            <div className="flex flex-col justify-start py-2 px-3">
              <h1 className=" text-sm font-bold">سوسان کاوا</h1>
              <p className=" text-xs  ">هنرمند و تاجر</p>
            </div>
          </div>
          <p className=" pb-4 text-sm px-8">
            من قطعات اولیه سبدهای مینیاتوری را چاپ سه بعدی می کنم که دانش آموزان
            با مواد طبیعی اصیل می بافند. Craftcloud خدمات مداوم عالی را ارائه
            کرده است، و با صبورانه با من از طریق تکرارهای چاپ با کمیت کم کار می
            کند تا کیفیت، تناسب و قیمت مناسب را به دست آوریم!
          </p>
        </div>

        <div className="bg-stone-300 rounded-xl md:w-52 md:h-80 lg:w-72 lg:h-64  ">
          <div className=" flex flex-row px-8 py-3">
            <div className="">
              <img
                src={Neil}
                alt=""
                className=" rounded-full max-w-[50px] max-h-[50px]"
              />
            </div>
            <div className="flex flex-col justify-start py-2 px-3">
              <h1 className=" text-sm font-bold">نیل رمزی</h1>
              <p className=" text-xs ">مدیرعامل جواهرات مونتگومری رامسی</p>
            </div>
          </div>
          <p className="pb-4 text-sm px-8">
            از رابط نرم‌افزار گرفته تا خدمات مشتری درجه یک، همه چیز را از
            نمونه‌سازی تا تولید بسیار آسان‌تر می‌کند. ما را شریکی ضروری در سفر
            طراحی و تولید خود می‌دانیم.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Customers;
