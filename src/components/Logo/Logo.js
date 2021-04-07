  
import classes from "./Logo.module.css";
import logo from "../../images/bonsai.svg";


const Logo = ()=> {
    return(
        <div className={classes.Logo}>
  <img src={logo} alt="toys"/>
  <span>shop</span>
        </div>
    );
}

export default Logo;