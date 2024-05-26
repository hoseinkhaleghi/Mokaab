import {Outlet, Navigate} from "react-router-dom";
import * as ls from "local-storage";

const PrivateRoutes = () => {
  return ls.get("user") ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
