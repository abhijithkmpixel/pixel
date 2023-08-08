import Link from "next/link";
import React, { useEffect } from "react";

const GoodCoffee = () => {
  useEffect(() => {
    if (typeof document != "undefined") {
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
    }
    return () => {};
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
