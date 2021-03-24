import classes from "./Logo.module.css";
import logo from "../../images/bonsai.svg"

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="SEEDLINGS"/>
            <span>Fruit Builder</span>
        </div>
      );
}
 
export default Logo;