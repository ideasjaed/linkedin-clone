import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.es/svg/vstatic/svg/174/174857.svg?token=exp=1614995716~hmac=5e07061189d50d7c7b641a9227e4a6e0"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Buscar" />
        </div>
      </div>
      <div className="header__rigth">
        <HeaderOption Icon={HomeIcon} title="Inicio" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Mi reed" />
        <HeaderOption Icon={WorkIcon} title="Empleos" />
        <HeaderOption Icon={SmsIcon} title="Mensajes" />
        <HeaderOption Icon={NotificationsIcon} title="Notificaciones" />
        <HeaderOption avatar={true} title="Yo" onClick={logoutApp} />
        <div className="header__products">
          <HeaderOption
            className="header__product"
            Icon={AppsIcon}
            title="Productos"
          />
        </div>
        <div className="header__premium">
          <HeaderOption title="Prueba Premium gratis 1 mes" />
        </div>
      </div>
    </div>
  );
}

export default Header;
