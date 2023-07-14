import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header data-scroll-section>
      <div className="header_inner_wrap" data-scroll>
        <Link href={"/"} className="brand_logo" data-scroll>
          <Image
            src={"/logo/pixellogo.png"}
            width={160}
            height={38}
            alt="Pixelflames logo"
            data-scroll
          />
        </Link>
        <div className="menu_icon_wrap" data-scroll data-cursor-stick="#stick-me" data-cursor-text=" ">
          <span>Menu+</span>
          <ul  id="stick-me">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
