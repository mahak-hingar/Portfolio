import "./Footer.css";
import React from "react";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Jaipur, Rajasthan.</p>
              
            </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone size={20} style={{ color: "#fff" , marginRight : "2rem"}} />
                +91-8949400809
              </h4>
            </div>
            <div className="email">
              <h4><FaMailBulk size={20} style ={{ color:"#fff",marginRight:"2rem"}}/>hingarmahak559@gmail.com</h4>
            </div>
          </div>
       

        <div className="right">
         <h4>About Me</h4> 
         <p>This is me Mahak Jain Hingar. I enjoy discussing new projects and design challenges.</p>
         <div className="social">
         <a href="https://www.facebook.com/profile.php?id=100071883018446" ><FaFacebook size={30} style ={{ color:"#fff",marginRight:"1rem"}}/></a>
         <a href="https://www.linkedin.com/in/mahakhingar/"><FaLinkedin size={30} style ={{ color:"#fff",marginRight:"1rem"}}/></a>
         <a href="https://twitter.com/Mahakja79331348?t=JmsPwYpvqMtORlreD5HIuQ&s=08"><FaTwitter size={30} style ={{ color:"#fff",marginRight:"1rem"}}/></a>
         <a href="https://github.com/mahak-hingar"><FaGithub size={30} style ={{ color:"#fff",marginRight:"1rem"}}/></a>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
