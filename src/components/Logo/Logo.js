import classes from "./Logo.module.css";
import logo from "../../images/bonsai.svg"

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="SEEDLINGS"/>
            <span>Seedlings</span>
        </div>
      );
}
 
export default Logo;