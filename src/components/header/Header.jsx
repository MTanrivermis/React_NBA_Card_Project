import nbaLogo from "../../assets/nba-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={nbaLogo} alt="" />
      </div>
      <div>
        <h1 className="text-center display-2">NBA LEGENDS</h1>
      </div>
    </div>
  );
};

export default Header;
