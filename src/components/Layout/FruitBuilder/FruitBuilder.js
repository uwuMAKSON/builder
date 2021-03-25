import FruitPreview from "./FruitPreview/FruitPreview";
import FruitControls from "./FruitControls/FruitControls";

import classes from "./FruitBuilder.module.css";
import { useState } from "react";

const FruitBuilder = () => {
  const [ingredients, setIngredients] = useState({
    apple: 1,
    pear: 1,
    banana: 1,
   
  });

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setIngredients(newIngredients);
  }

  return (
    <div className={classes.FruitBuilder}>
      <FruitPreview ingredients={ingredients} />
      <FruitControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default FruitBuilder;