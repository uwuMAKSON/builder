  
import classes from "./Logo.module.css";
import logo from "../../images/bonsai.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Fruit project" />
      <div>Fruit Builder</div>
    </div>
  );
}

export default Logo;