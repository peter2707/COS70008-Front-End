import React from "react";
import { Link } from "react-router-dom";
import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container mx-6 lg:mx-8">
      <div className="footer-wrapper bg-slate-950 text-white w-full lg:max-w-screen-2xl mx-auto p-6 lg:p-8 rounded-2xl">
        <div className="top-navigation block text-center md:flex md:flex-row md:justify-between md:items-center mb-6">
          <div className="top-left flex flex-row justify-center items-center">
            <img
              className="mr-2 mb-4 md:mb-0"
              src="logo192.png"
              width="96px"
              height="96px"
              alt="Logo"
            />
            <Link to="" className="font-medium text-xl mr-2">
              Privacy policy
            </Link>
            <Link to="" className="font-medium text-xl mr-2">
              Contact us
            </Link>
          </div>
          <div className="top-right flex flex-row justify-center items-center">
            <p className="font-medium text-xl mr-2">
              © {new Date().getFullYear()} Burnet Institute. All Rights
              Reserved.
            </p>
          </div>
        </div>

        <div className="content-bottom block text-left md:flex md:flex-row md:justify-between md:items-start md:gap-8">
          <div className="bottom-left w-full md:w-1/2">
            <p>
              Burnet Institute (Australia) is located on the traditional land of
              the Boon Wurrung people and we offer our respects to their Elders
              past and present. We recognise and respect the continuation of
              cultural, spiritual and educational practices of Aboriginal and
              Torres Strait Islander peoples of this land.
            </p>

            <div className="follow-social-media flex flex-row justify-start items-center mt-6">
              <p>Follow us</p>
              <div className="media-links flex flex-row flex-wrap gap-2 ml-2">
                <button className="border-2 rounded-full p-2 text-white">
                  <a href="#xtwitter">
                    <RiTwitterXLine />
                  </a>
                </button>
                <button className="border-2 rounded-full p-2 text-white">
                  <a href="#xtwitter">
                    <RiLinkedinFill />
                  </a>
                </button>
                <button className="border-2 rounded-full p-2 text-white">
                  <a href="#xtwitter">
                    <RiFacebookFill />
                  </a>
                </button>
                <button className="border-2 rounded-full p-2 text-white">
                  <a href="#xtwitter">
                    <RiInstagramLine />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="bottom-right w-full md:w-1/2 mt-6 md:mt-0">
            <p>DISCLOSURE OF INTEREST</p>
            <p className="py-2">
              Burnet Institute is an independent medical research institute and
              like other medical research institutes in Victoria, receives
              competitive funding support for its research programs from many
              sources including the National Health and Medical Research
              Council, Medical Research Future Fund, Operational Infrastructure
              Support Scheme of the State Government of Victoria, Victorian
              Medical Research Accelerator Fund, as well as the Department of
              Foreign Affairs and Trade, philanthropic support from the
              Australian community, and various national and international
              Trusts and Foundations.
            </p>
            <p>
              Burnet Institute owns registered trademarks to its name and
              pending trademarks to the ‘reach for the many’ logo and word marks
              found on our website. See copyright and disclaimer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
