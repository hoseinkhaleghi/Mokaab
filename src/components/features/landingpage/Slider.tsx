import headerpic from '../../../assets/images/3d-printing-cost-saving-design.jpg';
import headerpic2 from '../../../assets/images/3D-Printing-Future-Applications-and-Implications-scaled.jpg';
import headerpic3 from '../../../assets/images/amokrane-ait-kaci-_eGvuubNBZ8-unsplash.jpg';
import Button from '../../common/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className=" bg-white w-full pb-2     "
      >
        <SwiperSlide >
          <div className=" min-h-[28rem] max-h-36 overflow-hidden w-full  ">
            <img
              className="min-h-[28rem] max-h-36 object-cover rounded-b-2xl w-full"
              src={headerpic}
              alt="image description"
            ></img>
            <div className="bg-darkblue absolute bottom-0 opacity-30 rounded-b-2xl right-0 left-0 top-0 w-full h-full overflow-hidden"></div>
          </div>
          <div className="absolute lg:bottom-10 right-4  bottom-5 flex flex-col gap-2">
            <h1 className="font-bold text-white text-xl">
              سرویس پرینت سه بعدی
            </h1>
            <p className=" text-white text-xs font-medium">
              ایجاد و سفارشی سازی کنید. ساده کنید و ذخیره کنید. با خدمات چاپ سه
              بعدی موانع طراحی را از بین ببرید و کسب و کار خود را افزایش دهید.
            </p>
            <Link to="/dashboard/createmodel" className="flex flex-row justify-start">
              <Button className=" rounded-xl bg-red text-xs font-bold h-10 w-72 ">
                <span className="font-bold text-sm">
                  هر آنچه تصور میکنی را خلق کن
                </span>
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" min-h-[28rem] max-h-36 overflow-hidden w-full ">
            <img
              className="min-h-[28rem] max-h-36 object-cover rounded-b-2xl w-full"
              src={headerpic2}
              alt="image description"
            ></img>
            <div className="bg-darkblue  absolute bottom-0 opacity-30 rounded-b-2xl right-0 left-0 top-0 w-full h-full overflow-hidden"></div>
          </div>
          <div className="absolute lg:bottom-10 right-4  bottom-5 flex flex-col gap-2">
            <h1 className="font-bold text-white text-xl">
              سرویس پرینت سه بعدی
            </h1>
            <p className=" text-white text-xs font-medium">
              ایجاد و سفارشی سازی کنید. ساده کنید و ذخیره کنید. با خدمات چاپ سه
              بعدی موانع طراحی را از بین ببرید و کسب و کار خود را افزایش دهید.
            </p>
            <Link to="/dashboard/createmodel" className="flex flex-row justify-start">
              <Button className=" rounded-xl bg-red text-xs font-bold h-10 w-72 ">
                <span className="font-bold text-sm">
                  هر آنچه تصور میکنی را خلق کن
                </span>
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" min-h-[28rem] max-h-36 overflow-hidden w-full ">
            <img
              className="min-h-[28rem] max-h-36 object-cover rounded-b-2xl w-full"
              src={headerpic3}
              alt="image description"
            ></img>
            <div className="bg-darkblue  absolute bottom-0 opacity-30 rounded-b-2xl right-0 left-0 top-0 w-full h-full overflow-hidden"></div>
          </div>
          <div className="absolute lg:bottom-10 right-4  bottom-5 flex flex-col gap-2">
            <h1 className="font-bold text-white text-xl">
              سرویس پرینت سه بعدی
            </h1>
            <p className=" text-white text-xs font-medium">
              ایجاد و سفارشی سازی کنید. ساده کنید و ذخیره کنید. با خدمات چاپ سه
              بعدی موانع طراحی را از بین ببرید و کسب و کار خود را افزایش دهید.
            </p>
            <Link to="/dashboard/createmodel" className="flex flex-row justify-start">
              <Button className=" rounded-xl bg-red text-xs font-bold h-10 w-72 ">
                <span className="font-bold text-sm">
                  هر آنچه تصور میکنی را خلق کن
                </span>
              </Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
