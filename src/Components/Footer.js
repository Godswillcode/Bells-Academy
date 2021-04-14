import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black pt-20 pb-16 px-10">
      <div className="flex justify-center gap-2">
        <div className="hover:bg-primary bg-secondary h-8 w-8 rounded-full text-center flex justify-center items-center text-white">
          {" "}
          <a href="#!">
            <i className="fab fa-instagram"></i>{" "}
          </a>{" "}
        </div>

        <div className="hover:bg-primary bg-secondary h-8 w-8 rounded-full text-center flex justify-center items-center text-white">
          {" "}
          <a href="#!">
            {" "}
            <i className="fab fa-facebook-f"></i>{" "}
          </a>{" "}
        </div>

        <div className="hover:bg-primary bg-secondary h-8 w-8 rounded-full text-center flex justify-center items-center text-white">
          {" "}
          <a href="#!">
            {" "}
            <i className="fab fa-twitter"></i>
          </a>{" "}
        </div>
        <div className="hover:bg-primary bg-secondary h-8 w-8 rounded-full text-center flex justify-center items-center text-white">
          {" "}
          <a href="#!">
            {" "}
            <i className="fab fa-youtube"></i>
          </a>{" "}
        </div>
      </div>

      <div className="flex justify-center mt-5 text-center">
        <ul className="flex flex-wrap justify-center gap-6 text-gray-400">
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Need help?</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/apply">Apply Now</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/admission">Admission</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/payFees">Pay-Fees</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/gallery">Gallery</Link>{" "}
          </li>
        </ul>
      </div>
      <hr className="mt-10" />
      <p className="text-white text-center pt-10">
        {" "}
        &copy; copyRight {year}, All Rights Reserved Designed by{" "}
        <a
          href="https://godswill-portfolio.netlify.app/"
          target="blank"
          rel="noopener noreferre"
          className="text-secondary font-medium"
        >
          Godswill
        </a>
      </p>
    </div>
  );
};

export default Footer;
