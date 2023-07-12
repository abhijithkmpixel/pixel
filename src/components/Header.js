import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header_inner_wrap">
        <Link href={"/"} className="brand_logo">
          <Image src={"/logo/pixellogo.png"} width={160} height={38} alt="Pixelflames logo"/>
        </Link>
        <div className="menu_icon_wrap">
          <span>Menu+</span>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
