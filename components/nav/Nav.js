import React from "react";
import classes from "./Nav.module.css";
import Link from "next/link";
const Nav = () => {
    return (
        <div className={classes.nav}>
            <Link href="">
                <p>home</p>
            </Link>
            <Link href="">
                <p>home</p>
            </Link>
            <Link href="">
                <p>home</p>
            </Link>
            <Link href="">
                <p>home</p>
            </Link>
        </div>
    );
};

export default Nav;
