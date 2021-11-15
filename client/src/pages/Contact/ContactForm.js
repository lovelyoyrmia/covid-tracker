import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import axios from "axios";

const FormStyle = styled.form`
  width: 100%;
  .contactform__group {
    width: 100%;
    margin-bottom: 1rem;
  }
  label {
    font-size: 1.1rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    color: var(gray-1);
    background-color: white;
    outline: none;
    border: none;
    border-radius: 10px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: white;
    color: black;
    font-size: 1rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .message__sent {
    margin-bottom: 1rem;
  }
  .message__close {
    display: none;
  }
`;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSend] = useState(false);

  const resetForm = () => {
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSend(true);
    //   emailjs.sendForm('service_96qi7vo',
    //     'template_ldjh2lk',
    //     e.target,
    //     'user_g3cqWH8EbvclEe2pkBZA9'
    //   ).then((response) => {
    //     console.log(response)
    //   }).catch((error) => console.log(error))
    await axios
      .post("https://covid-tracker-2912.herokuapp.com/api/form", {
        name,
        email,
        message,
      })
      .then(resetForm())
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <FormStyle onSubmit={sendEmail}>
        <div className="contactform__group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="write your name..."
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="contactform__group">
          <label htmlFor="email">
            Your Email
            <input
              type="text"
              id="email"
              email="email"
              value={email}
              placeholder="write your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="contactform__group">
          <label htmlFor="message">
            Your Message
            <textarea
              type="textarea"
              id="message"
              message="message"
              value={message}
              placeholder="write your message..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <div className={sent ? "message__sent" : "message__close"}>
          Message has been sent !!
        </div>
        <button type="submit" onSubmit={resetForm}>
          Send
        </button>
      </FormStyle>
    </div>
  );
}

export default ContactForm;
