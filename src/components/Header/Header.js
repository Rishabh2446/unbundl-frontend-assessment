import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-main">whistle</span>
        <span className="logo-sub">AND SMILE</span>
      </div>

      <button className="call-btn">
        📞
      </button>
    </header>
  );
}

export default Header;