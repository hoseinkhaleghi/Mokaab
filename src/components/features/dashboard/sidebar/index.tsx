'use client'
import { useLocation } from 'react-router-dom';
import { GoProject } from 'react-icons/go';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { CiUser } from 'react-icons/ci';
import { IoCartOutline} from 'react-icons/io5';
import { LuBox } from 'react-icons/lu';

const menuItems = [
  {id:21 , title: 'صفحه اصلی', link: '/landingpage', icon: <VscHome /> },
  {id:22, title: 'مدل های من', link: '/dashboard/models', icon: <LuBox />  },
  {id:23, title: 'سفارش ها', link: '/dashboard/orders', icon: <IoCartOutline /> },
  {id:24, title: 'حساب کاربری', link: '/dashboard/settings', icon: <CiUser /> },
  {id:25, title: 'خلق مدل', link: '/dashboard/createmodel', icon: <GoProject /> },
];
export default function Sidebar() {
  const location = useLocation();

  return (
    <div className='h-screen border-l-2 sm:pt-20 lg:pt-10'>
      <div>
        پروفایل کاربری
      </div>
    <ul 
      className={classNames(
        `lg:w-60  flex flex-col md:px-4 pt-3`,
      )}    

    >
      {menuItems.map((item) => (
        <Link to={item.link}>
        <li 
          className={classNames(
            `hover:bg-darkblue hover:text-white cursor-pointer mx-2 p-3 
             rounded-sm flex  items-center justify-start gap-2`,
            location.pathname.includes(item.link.toLowerCase()) &&
              'bg-background2',
          )}
        >
          <i className="child:text-text-color_1">{item.icon}</i>
          <h4 className="hidden sm:block font-normal">
            {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
          </h4>
        </li>
        </Link>
      ))}
    </ul>

    </div>
  );
}
