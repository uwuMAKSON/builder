import classes from "./FruitIngredient.module.css";
import appleBackground from "../../../../images/apple.svg";
import pearBackground from "../../../../images/pear.svg";
import bananaBackground from "../../../../images/banana.svg";


const FruitIngredient = ({ type, fixed }) => {
  const types = {
    apple: { backgroundImage: `url(${appleBackground})`, width: "35px", height: "35px" },
    pear: { backgroundImage: `url(${pearBackground})`, width: "35px", height: "35px" },
    banana: { backgroundImage: `url(${bananaBackground})`, width: "10px", height: "10px" },
   
  };

  function getPosition(ingredientWidth) {
    const fruitDiameter = 380;
    const fruitRadius = fruitDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * fruitDiameter);
    const ingredientLeft = Math.round(Math.random() * fruitDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - fruitRadius, 2) + Math.pow(ingredientLeft - fruitRadius, 2)
    ) + ingredientRadius;

    return distance < fruitRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.FruitIngredient} style={types[type]}></div>
  );
}

export default FruitIngredient;