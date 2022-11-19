import "./ContactUs.css";
import React from "react";

const ContactUs = () => {
  return (
    <div className="form">
      <form action="mailto:hingarmahak559@gmail.com">
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="Email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
