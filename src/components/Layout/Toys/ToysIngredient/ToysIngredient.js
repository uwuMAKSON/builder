import classes from "./ToysIngredient.module.css";


import appleBackground from "../../../../images/apple.svg";
import beanbagBackground from "../../../../images/beanbag.svg";
import ballBackground from "../../../../images/ball.svg";
import bearBackground from "../../../../images/bear.svg";
import carBackground from "../../../../images/car.svg";
import catBackground from "../../../../images/cat.svg";

const ToysIngredient = ({ type ,fixed }) => {
  const types = {
  
   apple: { backgroundImage: `url(${appleBackground})`, width: "50px", height: "50px" },
   cat: { backgroundImage: `url(${catBackground})`, width: "50px", height: "50px" },
   beanbag: { backgroundImage: `url(${beanbagBackground})`, width: "50px", height: "50px" },
   bear: { backgroundImage: `url(${bearBackground})`, width: "50px", height: "50px" },
    ball: { backgroundImage: `url(${ballBackground})`, width: "50px", height: "50px" },
    car: { backgroundImage: `url(${carBackground})`, width: "55px", height: "55px" },

  };
 
  return (
    <div className={classes.ToysIngredient} style={types[type]}></div>
  );
}
export default ToysIngredient;