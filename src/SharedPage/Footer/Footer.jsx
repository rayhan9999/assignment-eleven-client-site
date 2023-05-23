import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#1abce4] text-yellow-400-500">
        <div>
          <p>
            <span className="text-purple-500 text-3xl font-bold">Malik Robotics ToyZone</span>
            <br />
            <br />
            Online and Offline Both Available
          </p>
          <div className="flex justify-center mt-2">
            <Link to="#" className=" mr-2">
              <FaFacebook className="text-white text-xl" />
            </Link>
            <Link to="#" className="mr-2">
              <FaTwitter className="text-white text-xl" />
            </Link>
            <Link to="#" className="mr-2">
              <FaInstagram className="text-white text-xl" />
            </Link>
            <Link to="#" className="mr-2">
              <FaGoogle className="text-white text-xl" />
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover"> Support</a>
          <a className="link link-hover">Helpline</a>
          <a className="link link-hover"> Solutions</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Media kit</a>
          <a className="link link-hover">Marketing</a>
        </div>
        <div>
          <span className="footer-title">Store Information</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
