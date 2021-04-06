import FruitPreview from "./FruitPreview/FruitPreview";
import FruitControls from "./FruitControls/FruitControls";

import classes from "./FruitBuilder.module.css";
import { useState } from "react";

const FruitBuilder = () => {
  const prices = {
    apple: 15,
    banana: 20,
    pear: 10,
    watermelon: 200,
    grapes: 100,
  };
  const [ingredients, setIngredients] = useState({
    apple: 1,
    banana: 1,
    pear: 1,
    watermelon: 1,
    grapes: 1,
  });
  const [price, setPrice] = useState(150);

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.FruitBuilder}>
      <FruitPreview
        ingredients={ingredients}
        price={price} />
      <FruitControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default FruitBuilder;