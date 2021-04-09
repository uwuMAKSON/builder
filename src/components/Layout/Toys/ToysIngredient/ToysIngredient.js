import classes from "./ToysIngredient.module.css";


import appleBackground from "../../../../images/apple.svg";
import pearBackground from "../../../../images/pear.svg";
import watermelonBackground from "../../../../images/watermelon.svg";
import bearBackground from "../../../../images/bear.svg";
import grapesBackground from "../../../../images/grapes.svg";
import carBackground from "../../../../images/car.svg";

const ToysIngredient = ({ type ,fixed }) => {
  const types = {
  
   apple: { backgroundImage: `url(${appleBackground})`, width: "50px", height: "50px" },
   pear: { backgroundImage: `url(${pearBackground})`, width: "50px", height: "50px" },
   bear: { backgroundImage: `url(${bearBackground})`, width: "50px", height: "50px" },
    watermelon: { backgroundImage: `url(${watermelonBackground})`, width: "50px", height: "50px" },
    grapes: { backgroundImage: `url(${grapesBackground})`, width: "50px", height: "50px" },
    car: { backgroundImage: `url(${carBackground})`, width: "50px", height: "50px" },

  };
 
  return (
    <div className={classes.ToysIngredient} style={types[type]}></div>
  );
}
export default ToysIngredient;