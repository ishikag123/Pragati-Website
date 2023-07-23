import React from "react";
import "../Styles/Footer.css";
import logo from "../Assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Find us on Social Media</h4>
            <div className="socialmedia">
              <a
                href="https://www.facebook.com/profile.php?id=100012754594227&mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/pragati311?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4>Contact us</h4>

            <div className="contact">
              <div className="address">
                <MdLocationOn />
                <p>84 RABINDRA SARANI, Liluah, Howrah, West Bengal 711204</p>
              </div>

              <div className="whtsp">
                <FaWhatsapp />
                <p>8336971820</p>
              </div>
              <div className="mail">
                <SiGmail />
                <div className="details">
                  <p>pragatigrouptheatre91@gmail.com</p>
                  <p>pragatigrouptheatre@yahoo.com </p>
                </div>
              </div>
              <div className="phone">
                <FaPhoneAlt />
                <div className="details">
                  <p>8336971820</p>
                  <p>9830274118</p>
                  <p>9836280572</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <div className="logo">
              <img
                src={logo}
                alt=""
                height={220}
                width={160}
                style={{ opacity: 0.8 }}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} Pragati. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
