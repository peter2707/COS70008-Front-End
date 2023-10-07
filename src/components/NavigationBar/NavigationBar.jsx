import React from "react";
import "./NavigationBar.css";
import { FaUser } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    route: "/home",
    current: false,
  },
  {
    name: "Learn",
    route: "/learn",
    current: false,
  },
  {
    name: "Support",
    route: "/support",
    current: false,
  },
  {
    name: "About",
    route: "/about",
    current: false,
  },
];

const NavigationBar = () => {
  return (
    <Disclosure as="nav" role="navigation" className="navbar w-full lg:max-w-screen-2xl mx-auto bg-white">
      {({ open }) => (
        <>
          <div className="navbar-container px-8 z-10">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <HiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            <div className="nav-left">
              <div className="navbar-logo">
                <img src="logo192.png" alt="Logo" />
                <span className="logo">Logo</span>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden mx-4 sm:ml-6 sm:block">
                <div className="flex items-center justify-end">
                  {navigation.map((item) => (
                    <ul className="navbar-items" key={item.name}>
                      <li>
                        <Link className="px-4 md:px-6 py-9" to={item.route}>
                          {item.name}
                        </Link>
                      </li>
                    </ul>
                  ))}

                  <Link
                    className="flex justify-center items-center p-3 bg-primary hover:bg-primaryLight text-white hover:text-primary rounded-full ml-4"
                    to="/login"
                  >
                    <FaUser className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navbar mobile */}
          <Disclosure.Panel className="sm:hidden">
            <div className="nav-mobile mx-auto z-10">
              <div className="w-full text-center">
                {navigation.map((item) => (
                  <ul className="navbar-items mobile" key={item.name}>
                    <li>
                      <a href={item.route}>{item.name}</a>
                    </li>
                  </ul>
                ))}
              </div>

              <div className="w-1/5 mx-auto">
                <Link
                  className="flex justify-center items-center px-4 py-3 my-4 gap-x-2 bg-primary text-white rounded-full"
                  to="/login"
                >
                  <FaUser className="text-white text-xl" /> Login
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavigationBar;
