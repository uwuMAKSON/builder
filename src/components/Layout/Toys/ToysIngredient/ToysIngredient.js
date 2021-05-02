import classes from "./ToysIngredient.module.css";


import robotBackground from "../../../../images/robot.svg";
import beanbagBackground from "../../../../images/beanbag.svg";
import ballBackground from "../../../../images/ball.svg";
import bearBackground from "../../../../images/bear.svg";
import bunnyBackground from "../../../../images/bunny.svg";
import girrafeBackground from "../../../../images/girrafe.svg";

const ToysIngredient = ({ type ,fixed }) => {
  const types = {
  
    robot: { backgroundImage: `url(${robotBackground})`, width: "50px", height: "50px" },
   girrafe: { backgroundImage: `url(${girrafeBackground})`, width: "50px", height: "50px" },
   beanbag: { backgroundImage: `url(${beanbagBackground})`, width: "50px", height: "50px" },
   bear: { backgroundImage: `url(${bearBackground})`, width: "50px", height: "50px" },
    ball: { backgroundImage: `url(${ballBackground})`, width: "50px", height: "50px" },
    bunny: { backgroundImage: `url(${bunnyBackground})`, width: "50px", height: "50px" },

  };
 
  return (
    <div className={classes.ToysIngredient} style={types[type]}></div>
  );
}
export default ToysIngredient;