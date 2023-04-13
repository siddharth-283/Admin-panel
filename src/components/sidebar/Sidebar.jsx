import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            <DashboardIcon className="icone" />
            <span>Dashboard</span>
          </li>
        </Link>

          <p className="title">List</p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icone" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <PersonOutlineIcon className="icone" />
            <span>Product</span>
          </li>
        </Link>

          <li>
            <CreditCardIcon className="icone" />
            <span>Order</span>
          </li>

          <li>
            <LocalShippingOutlinedIcon className="icone" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>

          <li>
            <InsertChartIcon className="icone" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsNoneOutlinedIcon className="icone" />
            <span>Notification</span>
          </li>

          <p className="title">Servics</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icone" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyOutlinedIcon className="icone" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsApplicationsOutlinedIcon className="icone" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>

          <li>
            <PortraitOutlinedIcon className="icone" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icone" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
