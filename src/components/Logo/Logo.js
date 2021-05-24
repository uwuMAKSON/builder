  
import classes from "./Logo.module.css";
import logo from "../../images/bear.svg";


const Logo = ()=> {
    return(
        <div className={classes.Logo}>
  <img src={logo} alt="toys"/>
  <span>Toys Shop</span>
        </div>
    );
}

export default Logo;