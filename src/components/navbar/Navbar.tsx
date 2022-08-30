import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../img/navbar/Home.svg";
import List from "../../img/navbar/List.svg";
import Search from "../../img/navbar/Search.svg";
import Settings from "../../img/navbar/Settings.svg";
import Message from "../../img/navbar/Message.svg";
import Exit from "../../img/navbar/Exit.svg";
import Companies from "../../img/navbar/Companies.svg";
import "./Navbar.scss";
import { INavbarProps } from "../../styled/INavbarProps/INavbarProps";
import { logoutUser } from "../../redux/store/reducers/authReducer/AuthAction";

export const Navbar: React.FC<INavbarProps> = ({ loggedIn, setLoggedIn }) => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const onSidebarClick = () => {
    setSidebarActive(!sidebarActive);
  };

  const onLogOutClick = () => {
    logoutUser();
    setLoggedIn(false);
  };

  return (
    <div className={loggedIn === false ? "hide" : "navbar"}>
      <div className="panel">
        <div className="panel-block">
          <div className="panel-block__item">
            <Link to="/">
              <button className="panel-block__btn">
                <img src={Home} alt="Home" />
              </button>
            </Link>
          </div>
          <div className="panel-block__item" onClick={onSidebarClick}>
            <button className="panel-block__btn">
              <img src={List} alt="List" />
            </button>
          </div>
          <div className="panel-block__item">
            <button className="panel-block__btn">
              {" "}
              <img src={Search} alt="Search" />{" "}
            </button>
          </div>
        </div>
        <div className="panel-block">
          <div className="panel-block__item">
            {" "}
            <button className="panel-block__btn">
              {" "}
              <img src={Settings} alt="Settings" />
            </button>
          </div>
          <div className="panel-block__item">
            {" "}
            <button className="panel-block__btn">
              {" "}
              <img src={Message} alt="Message" />
            </button>
          </div>
          <div className="panel-block__item">
            <Link to="/login">
              <button className="panel-block__btn" onClick={onLogOutClick}>
                <img src={Exit} alt="Exit" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={sidebarActive ? "sidebar active" : "sidebar"}>
        <div className="sidebar-logo">
          <div className="sidebar-logo__title">ЧЕСТНЫЙ АГЕНТ</div>
          <div className="sidebart-logo__subtitle">МЕНЕДЖЕР ПРОЦЕССА</div>
        </div>
        <div className="sidebar-link">
          <Link to={"/companies"}>
            <div className="sidebar-link__btn">
              <img src={Companies} alt="Companies__list" />
              <div className="sidebar-link__text">Организации</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
