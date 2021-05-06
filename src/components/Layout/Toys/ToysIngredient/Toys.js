import classes from "./Toys.module.css";


import robotBackground from "../../../../images/robot.svg";
import beanbagBackground from "../../../../images/beanbag.svg";
import ballBackground from "../../../../images/ball.svg";
import bearBackground from "../../../../images/bear.svg";
import bunnyBackground from "../../../../images/bunny.svg";
import girrafeBackground from "../../../../images/girrafe.svg";

const Toys = ({ type ,fixed }) => {
  const types = {
  
    robot: { backgroundImage: `url(${robotBackground})`, width: "60px", height: "60px" },
   girrafe: { backgroundImage: `url(${girrafeBackground})`, width: "60px", height: "60px" },
   beanbag: { backgroundImage: `url(${beanbagBackground})`, width: "60px", height: "60px" },
   bear: { backgroundImage: `url(${bearBackground})`, width: "60px", height: "60px" },
    ball: { backgroundImage: `url(${ballBackground})`, width: "60px", height: "60px" },
    bunny: { backgroundImage: `url(${bunnyBackground})`, width: "60px", height: "60px" },

  };
 
  return (
    <div className={classes.Toys} style={types[type]}></div>
  );
}
export default Toys;