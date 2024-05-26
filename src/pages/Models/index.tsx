// import classNames from 'classnames';
import { MdOutlineFileUpload } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import Input from '../../components/common/Input';
import { useEffect, useState } from 'react';
import Registered from '../../components/features/models/Registered';
import NotRegistered from '../../components/features/models/NotRegistered';

const modelItemsreg = [
  {
    id: 1,
    State: 'خلق شده',
    type: 'پلاستیک ، ابعاد 6*6 cm  ، تراکم 50%',
    price: '10000000' + 'تومان',
  },
  {
    id: 2,
    State: 'خلق شده',
    type: 'مقوا ، ابعاد 6*6 شیcm  ، تراکم 50%',
    price: '200003543400000' + 'تومان',
  },
];

const modelItemsnotreg = [
  {
    id: 3,
    State: 'ثبت نشده',
    type: 'پلاستیک ، ابعاد 7*6 cm  ، تراکم 58%',
    price: '10000000' + 'تومان',
  },
  {
    id: 4,
    State: 'ثبت نشده',
    type: 'کاغذ ، ابعاد 6*6 cm  ، تراکم 80%',
    price: '15000000' + 'تومان',
  },
  {
    id: 5,
    State: 'ثبت نشده',
    type: 'پلاستیک ، ابعاد 7*9 cm  ، تراکم 58%',
    price: '1588800000' + 'تومان',
  },
];
function Models() {
  const [check, setCheck] = useState(false);
  const [selreg, setSelreg] = useState(false);
  const [selnotreg, setSelnotreg] = useState(false);
  const [modelnotreg, setModelNotreg] = useState(null);
  const [modelreg, setModelReg] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/modelItemsreg')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setModelReg(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/modelItemsnotreg')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setModelNotreg(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <section className="flex flex-col gap-5 mt-3">
        <h1 className="text-3xl font-semibold">مدل های شما</h1>
        <div className="flex flex-row gap-4">
          <div className="gap-2 flex flex-row">
            <RiDeleteBin6Line />
            <div className="font-semibold text-base">حذف مدلهای انتخاب شده</div>
          </div>
          <div className="gap-2 flex flex-row">
            <input
              onClick={() => {
                setCheck(!check);
              }}
              type="checkbox"
            />
            <div className="font-semibold text-base">انتخاب همه</div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <li
            className={
              !selreg
                ? 'flex flex-row gap-2 cursor-pointer border-b-2'
                : 'flex flex-row gap-2 cursor-pointer border-b-2 border-red'
            }
            onClick={() => {
              setSelreg(!selreg);
              setSelnotreg(false);
            }}
          >
            <div>خلق شده</div>
            <div
              className={
                !selreg
                  ? 'bg-gray-300 w-6 rounded-md text-center '
                  : 'bg-red w-6 rounded-md text-center text-white'
              }
            >
              {modelItemsreg.length}
            </div>
          </li>
          <li
            className={
              !selnotreg
                ? 'flex flex-row gap-2 cursor-pointer border-b-2'
                : 'flex flex-row gap-2 cursor-pointer border-b-2 border-red'
            }
            onClick={() => {
              setSelnotreg(!selnotreg);
              setSelreg(false);
            }}
          >
            <div>ثبت نشده </div>
            <div
              className={
                !selnotreg
                  ? 'bg-gray-300 w-6 rounded-md text-center'
                  : 'bg-red w-6 rounded-md text-center text-white'
              }
            >
              {modelItemsnotreg.length}
            </div>
          </li>
        </div>
        {selreg ? <Registered models={modelreg} check={check} /> : ''}
        {selnotreg ? <NotRegistered models={modelnotreg} check={check} /> : ''}

        <Link
          to="/dashboard/createmodel"
          className="mr-2 font-bold text-primary"
        >
          <button className="bg-white flex flex-row gap-3 ">
            <MdOutlineFileUpload />
            <p className="font-semibold text-base ">بارگزاری مدل های بیشتر</p>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Models;
