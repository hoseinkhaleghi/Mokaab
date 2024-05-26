// import classNames from 'classnames';
import { MdOutlineFileUpload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Current from '../../components/features/orders/Current';
import Cancel from '../../components/features/orders/Cancel';
import Delivery from '../../components/features/orders/Delivery';

const ordercurrent = [
  {
    id: 10,
    State: 'خلق شده',
    type: 'پلاستیک ، ابعاد 6*6 cm  ، تراکم 50%',
    price: '10000000' + 'تومان',
  },
  {
    id: 11,
    State: 'خلق شده',
    type: 'مقوا ، ابعاد 6*6 cm  ، تراکم 50%',
    price: '2000000000' + 'تومان',
  },
];

const ordercancle = [
  {
    id: 12,
    State: 'خلق شده',
    type: 'پلاستیک ، ابعاد 6*6 cm  ، تراکم 50%',
    price: '10000000' + 'تومان',
  },
  {
    id: 13,
    State: 'خلق شده',
    type: 'مقوا ، ابعاد 6*6 cm  ، تراکم 50%',
    price: '2000000000' + 'تومان',
  },
];

const orderdelivery = [
  {
    State: 'ثبت نشده',
    type: 'پلاستیک ، ابعاد 7*6 cm  ، تراکم 58%',
    price: '10000000' + 'تومان',
  },
  {
    State: 'ثبت نشده',
    type: 'کاغذ ، ابعاد 6*6 cm  ، تراکم 80%',
    price: '15000000' + 'تومان',
  },
  {
    State: 'ثبت نشده',
    type: 'پلاستیک ، ابعاد 7*9 cm  ، تراکم 58%',
    price: '1588800000' + 'تومان',
  },
];

function Models() {
  const [selcurrent, setSelcurrent] = useState(false);
  const [seldelivery, setSeldelivery] = useState(false);
  const [selcancle, setSelcancle] = useState(false);

  return (
    <div>
      <section className="flex flex-col gap-5 mt-3">
        <h1 className="text-3xl font-semibold">سفارش های شما</h1>
        <div className="flex flex-row justify-center gap-10">
          <li
            className={
              !selcurrent
                ? 'flex flex-row gap-2 cursor-pointer border-b-2'
                : 'flex flex-row gap-2 cursor-pointer border-b-2 border-red'
            }
            onClick={() => {
              setSelcurrent(!selcurrent);
              setSeldelivery(false);
              setSelcancle(false);
            }}
          >
            <div>خلق شده</div>
            <div
              className={
                !selcurrent
                  ? 'bg-gray-300 w-6 rounded-md text-center '
                  : 'bg-red w-6 rounded-md text-center text-white'
              }
            >
              {ordercurrent.length}
            </div>
          </li>
          <li
            className={
              !seldelivery
                ? 'flex flex-row gap-2 cursor-pointer border-b-2'
                : 'flex flex-row gap-2 cursor-pointer border-b-2 border-red'
            }
            onClick={() => {
              setSeldelivery(!seldelivery);
              setSelcurrent(false);
              setSelcancle(false);
            }}
          >
            <div>ثبت نشده </div>
            <div
              className={
                !seldelivery
                  ? 'bg-gray-300 w-6 rounded-md text-center'
                  : 'bg-red w-6 rounded-md text-center text-white'
              }
            >
              {orderdelivery.length}
            </div>
          </li>
          <li
            className={
              !selcancle
                ? 'flex flex-row gap-2 cursor-pointer border-b-2'
                : 'flex flex-row gap-2 cursor-pointer border-b-2 border-red'
            }
            onClick={() => {
              setSelcancle(!seldelivery);
              setSelcurrent(false);
              setSeldelivery(false);
            }}
          >
            <div>ثبت نشده </div>
            <div
              className={
                !selcancle
                  ? 'bg-gray-300 w-6 rounded-md text-center'
                  : 'bg-red w-6 rounded-md text-center text-white'
              }
            >
              {orderdelivery.length}
            </div>
          </li>
        </div>
        {selcurrent ? <Current order={ordercurrent} /> : ''}
        {seldelivery ? <Delivery orders={orderdelivery} /> : ''}
        {selcancle ? <Cancel orders={ordercancle} /> : ''}

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
