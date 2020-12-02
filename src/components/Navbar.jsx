import React, { useState, useEffect } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { BiErrorCircle, BiChevronsRight } from "react-icons/bi";
import { RiUserSharedLine, RiLightbulbFlashFill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiSettings, FiSun, FiMoon } from "react-icons/fi";

const NavBar = (props) => {
  const [lightDark, setLightDark] = useState(false);

  const themeHandler = () => {
    console.log("clicked");
    setLightDark((lightDark) => !lightDark);
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("body").classList.toggle("light");
  };

  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <div
      className="nav-bar"
      onMouseOver={props.changeColor}
      onMouseOut={props.changeColor}
    >
      <ul className="navbar-nav">
        <li className="logo">
          <a href="#" className="nav-link" onClick={props.welcomeHandler}>
            <span className="link-text">pointer</span>
            <BiChevronsRight
              className="nav-icon"
              size={"3rem"}
              style={{ color: props.givenColor }}
            />
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link" onClick={props.ergonomicsHandler}>
            <FaRegHandshake
              className="nav-icon"
              size={"1.5rem"}
              style={{ color: props.givenColor }}
            />

            <span className="link-text">Ergonomics</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={props.eoHandler}>
            <BiErrorCircle
              className="nav-icon"
              size={"1.5rem"}
              style={{ color: props.givenColor }}
            />

            <span className="link-text">Error and Omissions</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={props.infoSharingHandler}>
            <RiUserSharedLine
              className="nav-icon"
              size={"1.5rem"}
              style={{ color: props.givenColor }}
            />

            <span className="link-text">information Sharing</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={props.workSmarterHandler}>
            <RiLightbulbFlashFill
              className="nav-icon"
              size={"1.5rem"}
              style={{ color: props.givenColor }}
            />

            <span className="link-text">work Smarter</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={props.hcHandler}>
            <HiOutlineUserGroup
              className="nav-icon"
              size={"1.5rem"}
              style={{ color: props.givenColor }}
            />

            <span className="link-text">Human Capital</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FiSettings
              className="nav-icon"
              size={"1.5rem"}
              style={{ color: props.givenColor }}
            />

            <span className="link-text">settings</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={themeHandler}>
            {lightDark ? (
              <FiSun
                className="nav-icon"
                size={"1.5rem"}
                style={{ color: props.givenColor }}
              />
            ) : (
              <FiMoon
                className="nav-icon"
                size={"1.5rem"}
                style={{ color: props.givenColor }}
              />
            )}

            <span className="link-text">Theme</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
