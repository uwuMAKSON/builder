import classes from "./FruitIngredient.module.css";

import pearBackground from "../../../../images/pear.svg";


const FruitIngredient = ({ type }) => {
  const types = {
    pear: { backgroundImage: `url(${pearBackground})`, width: "35px", height: "35px" },
 
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


  const position = getPosition(types[type].width);
  types[type].top = position.top + "px";
  types[type].left = position.left + "px";

  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.FruitIngredient} style={types[type]}></div>
  );
}

export default FruitIngredient;