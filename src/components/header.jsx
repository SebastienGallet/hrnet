// @ts-nocheck
import logo from "../assets/wealthhealth.webp";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav className="header__nav">
        <a href="#home">View Current Employees</a>
      </nav>
    </header>
  );
}

export default Header;
