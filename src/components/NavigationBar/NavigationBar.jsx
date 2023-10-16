import { Fragment, useState } from "react";
import "./NavigationBar.css";
import { FaUser } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/isAuthenticated";

const navigation = [
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavigationBar = () => {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());
  const navigate = useNavigate();

  const dropdownItems = [
    authenticated ? { name: "Your profile", route: "/profile" } : null,
    authenticated ? { name: "Settings", route: "/account-settings" } : null,
    { name: "Login", route: "/login" },
  ];

  const logout = () => {
    try {
      // Check if the "token" is present in local storage before removal
      if (localStorage.getItem("token")) {
        // Clear the local storage
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("role");
        localStorage.removeItem("debug");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error removing items from local storage:", error);
    }

    // Update the authenticated state
    setAuthenticated(isAuthenticated());
  };

  return (
    <Disclosure
      as="nav"
      role="navigation"
      className="navbar w-full lg:max-w-screen-2xl mx-auto bg-white"
    >
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
              <Link to={isAuthenticated() ? "/userdashboard" : "/home"}>
                <div className="navbar-logo">
                  <img src="logo192.png" alt="Logo" />
                  <span className="logo">Logo</span>
                </div>
              </Link>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden mx-4 sm:ml-6 sm:block">
                <div className="flex items-center justify-end">
                  <ul className="navbar-items">
                    <li>
                      <Link
                        className="px-4 md:px-6 py-9"
                        to={isAuthenticated() ? "/userdashboard" : "/home"}
                      >
                        Home
                      </Link>
                    </li>
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link className="px-4 md:px-6 py-9" to={item.route}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <Menu.Button>
                      <div className="flex justify-center items-center p-3 bg-primary hover:bg-primaryLight text-white hover:text-primary rounded-full cursor-pointer transition-colors duration-75">
                        <FaUser className="h-6 w-6" />
                      </div>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-4 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {dropdownItems.map((item, index) => {
                          if (item) {
                            return (
                              <Menu.Item
                                as="button"
                                id={index}
                                role="button"
                                className="w-full text-left"
                                key={index}
                              >
                                {({ active }) => (
                                  <Link
                                    id={index}
                                    to={item.route}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-base"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            );
                          } else {
                            return null; // Return null for items that are null in the array
                          }
                        })}
                        {authenticated && ( // Show the Logout option if the user is authenticated
                          <Menu.Item as="button" onClick={logout}>
                            <div className="block px-4 py-2 text-base text-red-600 cursor-pointer">
                              Logout
                            </div>
                          </Menu.Item>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          {/* Navbar mobile */}
          <Disclosure.Panel className="sm:hidden">
            <div className="nav-mobile mx-auto z-10">
              <div className="w-full text-center">
                <ul className="navbar-items mobile">
                  <li className="border-b py-6">
                    <Link
                      className="px-4 md:px-6"
                      to={isAuthenticated() ? "/userdashboard" : "/home"}
                    >
                      Home
                    </Link>
                  </li>
                  {navigation.map((item) => (
                    <li key={item.name} className="border-b py-6">
                      <Link className="px-4 md:px-6" to={item.route}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-2/3 mx-auto">
                {dropdownItems.map((item, index) => {
                  if (item) {
                    return (
                      <div className="bg-gray-100 flex items-start justify-center m-2 p-4 rounded-md">
                        <Link
                          id={index}
                          to={item.route}
                          className="block text-base font-medium text-primary"
                        >
                          {item.name}
                        </Link>
                      </div>
                    );
                  } else {
                    return null; // Return null for items that are null in the array
                  }
                })}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavigationBar;
