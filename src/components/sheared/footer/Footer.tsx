import Image from "next/image";
import React from "react";
import footerLogo from "/public/images/footer-logo.png";
import QRCode from "/public/images/qrcode.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 lg:py-14 xl:py-16 bg-[#F4F4F4]">
      <div className="container">
        <div className="footer">
          <aside className="w-full">
            <Image src={footerLogo} alt="Footer Logo" className="mb-7"></Image>
            <input
              type="email"
              name="email"
              id="email"
              className="input w-full max-w-[400px] lg:max-w-[300px] focus:outline-none bg-[#EAEAEA] border-none mb-4"
              placeholder="enter your email"
            />
            <button className="btn btn-primary">Get a Proposal</button>
          </aside>
          <nav>
            <h6 className="footer-title text-xl font-bold text-[#241836] opacity-100 normal-case">
              Company
            </h6>
            <Link href="/about" className="link link-hover">
              About Us
            </Link>
            {/* <Link href="/student-packages" className="link link-hover">
              Student Packages
            </Link> */}
            <Link href="/study-abroad" className="link link-hover">
              Study Abroad
            </Link>
            <Link href="/work-abroad" className="link link-hover">
              Work Abroad
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title text-xl font-bold text-[#241836] opacity-100 normal-case">
              Links
            </h6>
            <Link href="/contact" className="link link-hover">
              Contact
            </Link>
            <Link href="/terms-conditions" className="link link-hover">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="link link-hover">
              Privacy Policy
            </Link>
          </nav>
          <aside className="w-full border-0 lg:border-l-2 border-[#A8A8A8]">
            <Image
              src={QRCode}
              alt="qr code"
              className="w-full max-w-24 rounded md:mx-auto"
            />
            <div className="flex gap-5 my-4 md:mx-auto">
              <Link href={"#"}>
                <FaFacebook className="text-2xl hover:text-primary duration-500" />
              </Link>
              <Link href={"#"}>
                <FaInstagram className="text-2xl hover:text-primary duration-500" />
              </Link>
              <Link href={"#"}>
                <FaYoutube className="text-2xl hover:text-primary duration-500" />
              </Link>
              <Link href={"#"}>
                <FaTwitter className="text-2xl hover:text-primary duration-500" />
              </Link>
              <Link href={"#"}>
                <FaLinkedin className="text-2xl hover:text-primary duration-500" />
              </Link>
            </div>
            <p className="md:mx-auto">
              &copy; {currentYear} Copyright by TurnAbroad
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
