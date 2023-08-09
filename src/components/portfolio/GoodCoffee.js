import { gsap } from "gsap";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";

const GoodCoffee = () => {
  let ctx;

  useLayoutEffect(() => {
    if (typeof document != "undefined") {
      ctx = gsap.context(() => {
        if (window.screen.width > 1200) {
          document
            .querySelector(".good_coffee")
            .addEventListener("mouseover", function () {
              document.querySelector("body").classList.add("good_coffee_enter");
            });
          document
            .querySelector(".good_coffee")
            .addEventListener("mouseleave", function () {
              document
                .querySelector("body")
                .classList.remove("good_coffee_enter");
            });
        }
      });
    }
    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <section className="good_coffee">
      <div className="container-fluid">
        <div className="good_coffee_wrapper">
          <h2>Have An Idea?</h2>
          <h4>
            LET'S TALK ABOUT IT AROUND A{" "}
            <Link href={"#"} data-cursor-img="/uploads/coffee.png">
              GOOD COFFEE.
            </Link>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default GoodCoffee;