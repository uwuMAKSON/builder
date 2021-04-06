import FruitIngredient from "../FruitIngredient/FruitIngredient";

import classes from "./FruitPreview.module.css";
import ingredientsBackground from "../../../../images/karzina.jpg";

const FruitPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<FruitIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.FruitPreview}>
      <div className={classes.Fruit}>
        <div
          className={classes.ingredients}
          style={{ backgroundImage: `url(${ingredientsBackground})` }}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default FruitPreview;