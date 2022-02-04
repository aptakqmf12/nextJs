import React from "react";
import Link from "next/link";
import NavStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div>
      <nav className={NavStyles.nav}>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/photos">photos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
