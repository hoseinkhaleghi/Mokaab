import history from '../../../assets/images/jonny-caspari-d21CGQKtJh8-unsplash.jpg';
function History() {
  return (
    <div className="overflow-hidden flex items-center justify-center">
      <div className=" my-6 flex relative items-center overflow-hidden max-w-[46rem] max-h-[30rem] rounded-2xl  ">
        <img
          className="  rounded-2xl "
          src={history}
          alt="image description"
        ></img>

        <div className="bg-white  absolute bottom-0 opacity-30 right-0 left-0 top-0 w-full h-full overflow-hidden"></div>
        <div className="absolute font-semibold text-xl sm:top-12 top-6  px-5">
          <div className='flex flex-col'>
            <h1>تاریخچهٔ چاپ سه‌بعدی</h1>
            <p className=" px-5 font-medium text-base">
              اولین فناوری چاپ سه‌بعدی در سال ۱۹۸۰ میلادی مشاهده شد. دکتر
              کودامای ژاپنی اولین بار این فناوری را به نام خود ثبت کرد. در آن
              زمان این فناوری نمونه‌سازی فوری خوانده می‌شد، این نام‌گذاری به این
              دلیل بود که این فناوری در واقع برای ساخت سریع و کم‌هزینهٔ نمونهٔ
              اولیه برای یک تولید انبوه طراحی شده بود.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
