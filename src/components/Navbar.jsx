import { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 bg-black/20 backdrop-blur-lg">
      <div className="mx-auto max-w-2xl flex items-center justify-between rounded-lg border border-stone-50/30 py-3">
        <div>
          <a href="#">
            <img src={logo} width={150} alt="logo" />
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4 pr-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="text-sm hover:text-yellow-400"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="m-2 h-6 w-5" />
            ) : (
              <FaBars className="m-2 h-6 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md lg:hidden">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block w-full text-lg"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
