import { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../Constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu visibility
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev); // Toggle dark mode
  };

  // Apply dark mode class to <html> dynamically
  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Nav Links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition duration-300"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-400 dark:text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m6.364-1.636l-1.414 1.414m3.536 7.636h-2M18.364 18.364l-1.414-1.414M12 19v2m-6.364-1.636l1.414-1.414m-3.536-7.636h2m1.636-6.364l1.414 1.414"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800 dark:text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.75a8.25 8.25 0 0 0 0 16.5m0-16.5a8.25 8.25 0 1 1 0 16.5m0-16.5V12m0 6.75V12"
                />
              </svg>
            )}
          </button>

          {/* Hamburger Button */}
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center bg-white dark:bg-gray-800 absolute top-full left-0 w-full py-4 shadow-lg z-20">
          {navLinks.map((item) => (
            <li key={item.label} className="py-2">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray dark:text-white hover:text-primary transition duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
