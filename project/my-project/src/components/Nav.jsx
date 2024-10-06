import { Link, useLocation } from "react-router-dom";
import logo from "../assets/home-page-images/hero_logo.png"; // Default logo for home
import darkLogo from "../assets/home-page-images/logo.png"; // Darker logo for about page
import Button from "./Button";

const Nav = () => {
  const location = useLocation();

  // Conditionally set the logo based on the current route
  const currentLogo = location.pathname === "/about" ? darkLogo : logo;

  return (
    <section className="absolute z-10 flex justify-between w-full top-[20px] lg:px-8 px-2">
      {/* logo */}
      <Link to="/" aria-label="Homepage">
        {/* Wrap the img with Link */}
        <img
          className="cursor-pointer w-[100px] lg:w-[140px] left-10"
          src={currentLogo}
          alt="Company logo"
        />
      </Link>

      {/* Render Button only on the home page */}
      {location.pathname === "/" && (
        <Button text="learn more" aria-label="Learn more about our services" />
      )}
    </section>
  );
};

export default Nav;
