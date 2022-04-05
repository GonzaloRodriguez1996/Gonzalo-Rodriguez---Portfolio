import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../App.css";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_29oxgac",
        "template_j1mab8d",
        e.target,
        "l6lc24yc-9nYHRbb0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <p className="inputText" type="Name:">
          <input placeholder="Write your name..."></input>
        </p>
        <p className="inputText" type="Email:">
          <input placeholder="Write your email..."></input>
        </p>
        <p className="inputText" type="Message:">
          <input placeholder="Write your message..."></input>
        </p>
        <button>Send</button>
      </form>
    </div>
  );
}
