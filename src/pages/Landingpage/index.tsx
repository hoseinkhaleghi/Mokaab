import harward from '../../assets/images/harvard.png';
import mit from '../../assets/images/mit.png';
import toyota from '../../assets/images/toyota.png';
import nasa from '../../assets/images/nasa.png';
import Footer from '../../components/features/landingpage/Footer';
import Customers from '../../components/features/landingpage/customers';
import MainOne from '../../components/features/landingpage/MainOne';
import MainThree from '../../components/features/landingpage/MainThree';
import MainFour from '../../components/features/landingpage/MainFour';
import MainTwo from '../../components/features/landingpage/MainTwo';
import Slider from '../../components/features/landingpage/Slider';
import Header from '../../components/features/landingpage/header';
import History from '../../components/features/landingpage/history';

export default function Landingpage() {
  return (
    <div className=" w-full bg-white ">
      <Header />
      <Slider />
      <MainOne />
      <MainTwo />
      <section className="flex items-center flex-col justify-center py-8">
        <span className="text-base lg:text-xl font-bold text-gray-500 ">
          فناوری CNC استفاده میشود در :
        </span>
        <div className="flex flex-row gap-1 pt-5">
          <img src={harward} alt="" className="w-20 sm:w-40 lg:w-56 lg:h-20 h-12" />
          <img src={mit} alt="" className="w-20 sm:w-40 lg:w-56 lg:h-20 h-12" />
          <img src={nasa} alt="" className="w-20 sm:w-40 lg:w-56 lg:h-20 h-12" />
          <img src={toyota} alt="" className="w-20 sm:w-40 lg:w-56 lg:h-20 h-12" />
        </div>
      </section>
      <MainThree />
      <Customers />
      <History />
      <MainFour />
      <Footer />
    </div>
  );
}
