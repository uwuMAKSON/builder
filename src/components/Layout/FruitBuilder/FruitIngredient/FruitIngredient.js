import classes from "./FruitIngredient.module.css";

import appleBackground from "../../../../images/apple.jpg";


const FruitIngredient = ({ type }) => {
  const types = {
    apple: { backgroundImage: `url(${appleBackground})`, width: "35px", height: "35px" },
  };

  return (
    <div className={classes.FruitIngredient} style={types[type]}></div>
  );
}

export default FruitIngredient;