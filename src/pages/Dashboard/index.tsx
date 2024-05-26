import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/features/dashboard/sidebar';

export default function Dashboard() {
  return (
    <div className="flex  h-visible">
      <Sidebar />
      <main className="w-full pt-28 px-4 flex justify-center ">
        <Outlet />
      </main>
    </div>
  );
}
