"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header({ headerclassName }) {
    const [nav_open, setnavOpen] = useState(false)

    return (
        <header className='header_wrapper second-active'>
            <div className="mainnav1">
                <nav className={`${nav_open ? 'open-menu' : ''}`}>
                    <ul className="nav1">
                        <li><Link href="/about-us"  prefetch className="menuDD">About Us</Link></li>
                        <li><Link href="/our-services" prefetch className="menuDD">Services</Link></li>
                        {/* <li><Link href="" className="menuDD">Insights</Link></li> */}
                        <li><Link href="/contact-us" prefetch className="menuDD">Contact us</Link></li>
                    </ul>

                    <ul className="nav2">
                        <li>
                            <a className="scocial-link" target="_blank" href="https://www.instagram.com/buzzzworth?igsh=MW9zeXVlaHpscWhwaQ==">
                                <img className="outlined-img" src="assets/images/svg/instagram.svg" alt="icon" />
                                <img className="solid-img" src="assets/images/svg/Insta-colored.svg" alt="icon" />
                            </a>
                        </li>
                        <li>
                            <a className="scocial-link" target="_blank" href="https://www.facebook.com/buzzzworth">
                                <img className="outlined-img" src="assets/images/svg/facebook.svg" alt="icon" />
                                <img className="solid-img" src="assets/images/svg/fb-colored.svg" alt="icon" />
                            </a>
                        </li>
                        <li>
                            <a className="scocial-link" target="_blank" href="https://www.linkedin.com/company/buzzzworth/">
                                <img className="outlined-img" src="assets/images/svg/linkedin.svg" alt="icon" />
                                <img className="solid-img" src="assets/images/svg/linkedin-colored.svg" alt="icon" />
                            </a>
                        </li>
                        {/* <li>
                            <a className="scocial-link" href="https://youtube.com" target="_blank">
                                <img src="/assets/images/svg/youtube.svg" alt="icon" />
                            </a>
                        </li> */}
                        <li>
                            <a className="scocial-link" target="_blank" href="https://api.whatsapp.com/send?phone=918691005079">
                                <img className="outlined-img" src="assets/images/svg/whatsapp.svg" alt="icon" />
                                <img className="solid-img" src="assets/images/svg/whatsapp-colored.svg" alt="icon" />
                            </a>
                        </li>

                        <div className="nav1Right">
                            <div className="nav1Member">
                                <div className="memberLoginBtn">
                                    <a href="#commonForm"> Connect With Us </a>
                                </div>

                                <div className="mob-nav-social-links" href="javascript:void(0)">
                                        <a ><img src="assets/images/svg/instagram-mob.svg" alt="img" /></a>
                                        <a ><img src="assets/images/svg/facebook-mob.svg" alt="img" /></a>
                                        <a ><img src="assets/images/svg/linkedin-mob.svg" alt="img" /></a>
                                        <a className="scocial-link" href="https://api.whatsapp.com/send?phone=918691005079"><img src="assets/images/svg/whatsapp.svg" alt="icon" /></a>
                                    </div>

                                <div className="get-touchArea">
                                    <div className="get-in">get in touch</div>
                                    <a href="#">hello@buzzzworth.com</a>
                                </div>
                            </div>
                        </div>
                    </ul>
                </nav>

                <div className={`nav1Toggle ${nav_open ? 'open' : ''}`} onClick={() => { setnavOpen(!nav_open) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="ilceLogo">
                <Link href="/home"><img src="assets/images/buzzworth-logo.png" alt="index" className="white-logo" /></Link>
            </div>
        </header>
    );
}