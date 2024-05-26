import { Routes, Route, Navigate } from 'react-router-dom';
import Landingpage from '../pages/Landingpage';
import { get } from 'local-storage';
import Signup from '../pages/Signup';
import Singin from '../pages/Signin';
import PrivateRoutes from './privateRoutes';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Createmodel from '../pages/Createmodel';
import Models from '../pages/Models';
import Orders from '../pages/Orders';
import Submitoffer from '../pages/Submitoffer';
import Settings from '../pages/Settings';
export default function Router() {

  return (
    <Routes>
      <Route index path="/" element={<Landingpage />} />
      <Route
        path="signin"
        element={
          !get('user') ? <Singin /> : <Navigate replace to="/dashboard" />
        }
      />
      <Route
        path="signup"
        element={
          !get('user') ? <Signup /> : <Navigate replace to="/dashboard" />
        }
      />
      <Route path="about" element={<About />} />
      <Route path="landingpage" element={<Landingpage />} />
      {/* <Route element={<PrivateRoutes />}> */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Board />} /> */}
          {/* <Route index element={<Navigate to="createmodel" />}></Route> */}
          <Route path="createmodel" element={<Createmodel />} />
          <Route path="models" element={<Models />} />
          <Route path="orders" element={<Orders />} />
          <Route path="submitoffer" element={<Submitoffer />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      {/* </Route> */}
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}
