import FruitIngredient from "../FruitIngredient/FruitIngredient";

import classes from "./FruitPreview.module.css";
import ingredientsBackground from "../../../../images/bonsai.svg";

const FruitPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<FruitIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.FruitPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${ingredientsBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default FruitPreview;