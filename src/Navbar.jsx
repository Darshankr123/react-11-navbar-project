import React, { useRef, useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import Links from "./Links";
import logo from "./logo.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setShowLinks(!showLinks);
  };

  const linksStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={handleClick}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linksStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-links">
          {social.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
