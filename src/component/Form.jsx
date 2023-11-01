import React, { useState } from "react";
import Button from "./Button";
import "/src/assets/css/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setShowDetails(true);
  };

  return (
    <div className="form-upper-div">
      <div className="main-mal">
        <form onSubmit={submitHandler} name="form">
          <div className="form-btn">
            <Button text="Email us" />
            <Button text="Call us" />
          </div>
          <div className="other">
            <Button isWhite={true} text="Find us" />
          </div>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <Button type="submit" text="Submit" />
        </form>
        {showDetails && (
          <div>
            <p>
              Name: {name}
              <br />
              Email: {email}
              <br />
              Text: {text}
            </p>
          </div>
        )}
      </div>
      <div className="form-img">
        <img src="./src/img/c.png" alt="ppic" />
      </div>
    </div>
  );
};

export default Form;
