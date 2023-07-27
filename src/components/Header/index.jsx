import connect_four from "../../assets/connect_four.png";

const Header = () => {
  return (
    <header>
      <div className="img-container">
        <img src={connect_four} slet="Game logo" />
      </div>
      <div className="status_move">
        <span className="indicator"></span>
        <span>TIME LEFT 7s</span>
      </div>
      <button>Restart</button>
    </header>
  );
};

export default Header;
