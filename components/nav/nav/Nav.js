"use client";
import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import { BsListNested, BsPhoneFlip } from "react-icons/bs";

const Nav = (props) => {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsFixed(scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navClass = `${classes.section}  ${
        isFixed ? `${classes.onScroll}` : ""
    }`;
    return (
        <section className={navClass}>
            <div className="mainContainer">
                <div className={`md:hidden`}>
                    <BsListNested
                        className="text-4xl cursor-pointer"
                        onClick={props.onShowAside}
                    />
                </div>
                <div className={classes.logo}>
                    <img src="/image/test-logo.png" alt="" />
                </div>
                <div className={`hidden md:block ${classes.list}`}>
                    <ul className="flex items-center gap-10 text-2xl md">
                        <li>
                            <p>الرئيسيه</p>
                        </li>
                        <li>
                            <p>خدماتنا</p>
                        </li>
                        <li>
                            <p>من نحن</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="md:flex hidden items-center gap-3 text-2xl">
                        <p>تواصل معانا</p>
                        <BsPhoneFlip className="text-3xl" />
                    </button>
                    <BsPhoneFlip className="md:hidden text-4xl cursor-pointer" />
                </div>
            </div>
        </section>
    );
};

export default Nav;
