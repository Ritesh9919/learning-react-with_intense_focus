const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h1>
          Movie <span className="design">App</span>
        </h1>
      </div>
      <div className="cart">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
            alt="cart image"
          />
        </div>
        <span className="count">0</span>
      </div>
    </header>
  );
};

export default Navbar;
