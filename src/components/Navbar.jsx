import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Services", link: "services", type: "scroll" },
    { name: "Why Us", link: "whychoose", type: "scroll" },
    { name: "Projects", link: "projects", type: "scroll" },
    { name: "About Us", link: "/aboutus", type: "page" },
    { name: "Contact", link: "/contactus", type: "page" },
    { name: "Our Team", link: "/ourteam", type: "page" },
  ];

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo (Left) */}
        <Link to="/" className="flex items-center space-x-2 absolute left-6">
          <img src={logo} alt="Logo Icon" className="h-8 w-auto scale-200" />
        </Link>

        {/* Centered Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-[#1E3A8A] mx-auto">
          {menuItems.map((item, i) => (
            <li key={i}>
              {item.type === "page" ? (
                <Link
                  to={item.link}
                  className={`pb-1 transition-all border-b-2 ${
                    location.pathname === item.link
                      ? "border-[#2563EB] text-[#2563EB]"
                      : "border-transparent hover:border-[#60A5FA] hover:text-[#2563EB]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(item.link)}
                  className={`pb-1 transition-all border-b-2 ${
                    activeSection === item.link
                      ? "border-[#2563EB] text-[#2563EB]"
                      : "border-transparent hover:border-[#60A5FA] hover:text-[#2563EB] cursor-pointer"
                  }`}
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle (Right) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1E3A8A] text-2xl absolute right-6"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <ul className="flex flex-col space-y-3 px-6 py-4 text-[#1E3A8A] font-medium">
            {menuItems.map((item, i) => (
              <li key={i}>
                {item.type === "page" ? (
                  <Link
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 border-b-2 ${
                      location.pathname === item.link
                        ? "border-[#2563EB] text-[#2563EB]"
                        : "border-transparent hover:border-[#60A5FA] hover:text-[#2563EB]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.link)}
                    className={`block py-2 border-b-2 text-left w-full ${
                      activeSection === item.link
                        ? "border-[#2563EB] text-[#2563EB]"
                        : "border-transparent hover:border-[#60A5FA] hover:text-[#2563EB]"
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
