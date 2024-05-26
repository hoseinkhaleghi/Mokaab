import Createmodel from '../../../../pages/Createmodel';
import Button from '../../../common/Button';
interface props {
  Onhowwork: () => void;
}

function SectionTwo({ Onhowwork }: props) {
  return (
    <div className="flex  items-center gap-6 flex-col my-6 ">
      <Createmodel />
      <Button
        onClick={() => Onhowwork()}
        className=" mb-4 rounded-xl bg-white  uppercase leading-normal border-2 border-darkblue "
      >
        <span className="text-black font-bold text-sm ">چطوری کار میکنه ؟</span>
      </Button>
    </div>
  );
}

export default SectionTwo;
