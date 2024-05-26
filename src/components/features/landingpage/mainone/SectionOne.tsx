import Button from '../../../../components/common/Button/index';
import first from '../../../../assets/images/fast-charge.png';
import guarantee from '../../../../assets/images/guarantee.png';
import hq from '../../../../assets/images/high-quality (1).png';
interface props {
  Onhowwork: () => void;
  Onqoute: () => void;
}
function SectionOne({ Onhowwork, Onqoute }: props) {
  return (
    <div className="">
      <section className="flex items-center  mt-4 flex-col justify-center gap-6">
        <h1 className="justify-center text-center text-3xl font-bold ">
          چرا مکعب ؟
        </h1>
        <div className="flex-col lg:flex-row items-center flex">
          <div className="flex flex-col justify-center items-center gap-4 px-16">
            <div className="text-lg  font-bold">
              برای زمان شما احترام قائلیم
            </div>
            <img src={first} alt="" className="max-w-[200px]" />
            <div className="text-base flex-wrap max-w-[400px]">
              تمام سعی ما در مکعب بر این میباشد که در بهترین و معقولانه ترین
              زمان ممکن کالای مشتری را ارسال کنیم .
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-4 px-16">
            <div className="text-lg font-bold ">
              اعتماد شما برای ما ارزشمند میباشد
            </div>
            <img src={guarantee} alt="" className="max-w-[200px]" />
            <div className="text-base flex-wrap max-w-[400px]">
              درصورت نا رضایتی در هنگام تحویل محصول امکان مرجوع کالا برای مشتری
              فراهم میباشد
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-4 px-16">
            <div className="text-lg font-bold ">بالاترین کیفیت</div>
            <img src={hq} alt="" className="max-w-[200px]" />
            <div className="text-base flex-wrap max-w-[400px]">
              بهترین کیفیت را با مناسب ترین قیمت با ما تجربه کنید.
            </div>
          </div>
        </div>

        <Button
          onClick={() => Onqoute()}
          className="w-52 rounded-xl bg-red  uppercase leading-normal text-neutral-50 "
        >
          <span className="font-bold text-sm">تخمین قیمت</span>
        </Button>
        <Button
          onClick={() => Onhowwork()}
          className="w-52 mb-4 rounded-xl bg-white  uppercase leading-normal border-2 border-darkblue "
        >
          <span className="text-black font-bold text-sm">
            چطوری کار میکنه ؟
          </span>
        </Button>
      </section>
    </div>
  );
}

export default SectionOne;
