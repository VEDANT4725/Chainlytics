import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <h1 className="brand">
        <span className="brand-icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: `
          <svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#f7931a"/>
            <path d="M20.6 14.9c.5-3.3-2-5-4.9-6.2l1-4-2.4-.6-1 4c-.6-.1-1.3-.2-2-.4l.99-3.9-2.4-.6-1 4c-.5-.1-1-.2-1.5-.3l.01.01-3.6-.9v1.6s1 .2 1 .3l2.4 0 1 4-2.4.6-1 4 2.4.6-1 4 2.4.6 1-4c.7.2 1.4.3 2.1.4l-1 4 2.4.6 1-4c3 .7 5.3.4 6.3-2.4.9-2.5-.1-3.9-1.9-4.6 1.4-.3 2.5-1 2-2.7z" fill="#fff"/>
          </svg>
        `}} />
        Chainlytics<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Switch checked={darkMode} onClick={() => changeMode()} />
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text={"dashboard"} />
        </a>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
