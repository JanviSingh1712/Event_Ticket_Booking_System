import { Link, useNavigate } from "react-router-dom";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

const navigation = [
  { name: "Home Page", href: "/", current: true },
  {
    name: "Events",
    href: "#",
    current: false,
    dropdown: [
      { name: "Music Shows", href: "#" },
      { name: "Comedy Shows", href: "#" },
      { name: "Workshops", href: "#" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = false; // Change this based on authentication state

  const handleSellTicketsClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/sell-tickets");
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left Section: Logo + Home + Events + Sell Tickets */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />

            {/* Navigation Links */}
            <div className="flex space-x-4">
              {navigation.map((item) =>
                item.dropdown ? (
                  <Menu as="div" className="relative" key={item.name}>
                    <MenuButton className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      {item.name}
                    </MenuButton>
                    <MenuItems className="absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {item.dropdown.map((subItem) => (
                        <MenuItem key={subItem.name}>
                          {({ active }) => (
                            <a
                              href={subItem.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {subItem.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                )
              )}

              {/* Sell Your Tickets */}
              <button
                onClick={handleSellTicketsClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Sell Your Tickets
              </button>
            </div>
          </div>

          {/* Right Section: Login/Signup */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
