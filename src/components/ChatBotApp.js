/** @format */

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import axios from "axios";

const ChatBotApp = () => {
  const [chatOpen, setchatOpen] = useState(false);
  const inputRef = useRef();
  const handleChatBot = async (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value);
    var objDiv = document.getElementById("chatBox");
    if (inputRef.current.value != "") {
      let userInput = inputRef.current.value;
      let div = document.createElement("div");
      div.setAttribute(
        "class",
        "chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--me"
      );
      div.innerText = userInput;
      objDiv.append(div);
      //   setTimeout(() => {
      objDiv.scrollTop = objDiv.scrollHeight;
      inputRef.current.value = "";
      //   }, 200);
      const data = await axios
        .post(`/api/chatbotapi`, { user_input: userInput })
        .then(function (response) {
          // handle success
          return response?.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      addResponseText(data?.message);

      //   getChatMsg(inputRef.current.value)
    } else {
    }
  };
  useEffect(() => {
    return () => {};
  }, [chatOpen]);
  const addResponseText = (text) => {
    var objDiv = document.getElementById("chatBox");
    let p = document.createElement("p");
    p.setAttribute(
      "class",
      "chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--bot"
    );
    p.innerText = text;
    objDiv.append(p);
    objDiv.scrollTop = objDiv.scrollHeight;
  };
  return (
    <aside className="chat__bot__ai d-none">
      <div
        className="chat__bot__ai__icon"
        onClick={() => setchatOpen(chatOpen == true ? false : true)}
        // data-bs-toggle="tooltip"
        // data-bs-placement="left"
        // title="Tooltip on left"
      >
        <Image
          src={"/icons/chataibot1.png"}
          alt="Chat bot"
          width={100}
          height={100}
          priority
        />
      </div>
      <div
        className={
          chatOpen == true
            ? "chat__bot__ai__chat__box chat__open"
            : "chat__bot__ai__chat__box"
        }>
        <div className="chat__bot__ai__chat__box__outer">
          <div className="chat__bot__ai__chat__box__header">
            <h4>Pixel Assistant</h4>
            <svg
              onClick={() => setchatOpen(chatOpen == true ? false : true)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
          <div className="chat__bot__ai__chat__box__innerwrap" id="chatBox">
            <p>
              How can i assist you today? Just start typing, and let's get the
              conversation started!
            </p>
            {/* <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--me">
              Hi there
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--bot">
              Hi there how can i help you
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--me">
              Hi there
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--bot">
              Hi there how can i help you
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--me">
              Hi there
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--bot">
              Hi there how can i help you
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--me">
              Hi there
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--bot">
              Hi there how can i help you
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--me">
              Hi there
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--bot">
              Hi there how can i help you
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--me">
              Hi there
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--bot">
              Hi there how can i help you
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--me">
              Hi there
            </p>
            <p className="chat__bot__ai__chat__box__msg chat__bot__ai__chat__box__msg--bot">
              Hi there how can i help you
            </p> */}
          </div>
          <div className="chat__bot__ai__chat__box__input__area">
            <form onSubmit={(e) => handleChatBot(e)}>
              <input type="text" placeholder="Message" ref={inputRef} />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ChatBotApp;
