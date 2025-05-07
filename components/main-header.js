import React from "react";
import Link from "next/link";
import logoImage from "@/assets/logo.png";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        Next Level Food
        <img src={logoImage.src} alt="a plate with food on it" />
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
