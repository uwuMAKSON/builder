import classes from "./ToysIngredient.module.css";


import appleBackground from "../../../../imges/apple.svg";
import pear from "../../../../imges/pear.svg";
import watermelonBackground from "../../../../images/watermelon.svg";
import bananaBackground from "../../../../imges/banana.svg";
import grapes from "../../../../imges/grapes.svg";

const ToysIngredient = ({ type ,fixed }) => {
  const types = {
  
   apple: { backgroundImage: `url(${appleBackground})`, width: "50px", height: "50px" },
   pear: { backgroundImage: `url(${pear})`, width: "50px", height: "50px" },
   banana: { backgroundImage: `url(${bananaBackground})`, width: "50px", height: "50px" },
    watermelon: { backgroundImage: `url(${watermelonBackground})`, width: "50px", height: "50px" },
    grapes: { backgroundImage: `url(${grapes})`, width: "50px", height: "50px" },

  };
 
  return (
    <div className={classes.ToysIngredient} style={types[type]}></div>
  );
}
export default ToysIngredient;