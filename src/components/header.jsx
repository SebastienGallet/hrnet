// @ts-nocheck
import logo from "../assets/wealthhealth.webp";

function Header({ onToggle, isListVisible }) {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav className="header__nav">
        <a href="#home" onClick={onToggle}>
          {isListVisible ? "Create Employee" : "View Current Employees"}
        </a>
      </nav>
    </header>
  );
}

export default Header;
