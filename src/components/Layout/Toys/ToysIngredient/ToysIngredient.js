import classes from "./ToysIngredient.module.css";


import appleBackground from "../../../../images/apple.svg";
import pearBackground from "../../../../images/pear.svg";
import ballBackground from "../../../../images/ball.png";
import bearBackground from "../../../../images/bear.svg";
import carBackground from "../../../../images/car.svg";
import catBackground from "../../../../images/cat.png";

const ToysIngredient = ({ type ,fixed }) => {
  const types = {
  
   apple: { backgroundImage: `url(${appleBackground})`, width: "50px", height: "50px" },
   cat: { backgroundImage: `url(${catBackground})`, width: "50px", height: "50px" },
   pear: { backgroundImage: `url(${pearBackground})`, width: "50px", height: "50px" },
   bear: { backgroundImage: `url(${bearBackground})`, width: "50px", height: "50px" },
    ball: { backgroundImage: `url(${ballBackground})`, width: "50px", height: "50px" },
    car: { backgroundImage: `url(${carBackground})`, width: "55px", height: "55px" },

  };
 
  return (
    <div className={classes.ToysIngredient} style={types[type]}></div>
  );
}
export default ToysIngredient;