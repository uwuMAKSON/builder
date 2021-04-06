import FruitPreview from "./FruitPreview/FruitPreview";
import FruitControls from "./FruitControls/FruitControls";

import classes from "./FruitBuilder.module.css";
import { useState } from "react";

const FruitBuilder = () => {
  const prices = {
    watermelon: 300,
    apple: 5,
    pear: 5,
    banana: 30,
    grapes: 80,
   
  };

  const [ingredients, setIngredients] = useState({
    watermelon: 1,
    apple: 1,
    pear: 1,
    banana: 1,
    grapes: 1,
  
  });
  const [price, setPrice] = useState(150);
  const [canBuy, setCanBuy] = useState(true);

  function checkCanBuy(newIngredients) {
    const totalIngredients = Object.values(newIngredients)
      .reduce((total, current) => total + current);
    setCanBuy(totalIngredients > 0);
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    checkCanBuy(newIngredients);
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      checkCanBuy(newIngredients);
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
        canBuy={canBuy}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default FruitBuilder;