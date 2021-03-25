import classes from "./FruitBuilder.module.css";
import FruitPreview from "./FruitPreview/FruitPreview";
import FruitControls from "./FruitControls/FruitControls";
import { useState } from "react";

const FruitBuilder = () => {
  const [ ingredients, setIngredients] = useState({
    pear:20,
    banana:20,
    apple:20,
  })

  return (
    <div className={classes.FruitBuilder}>
      <FruitPreview ingredients={ingredients} />
      <FruitControls />
    </div>
  );
}

export default FruitBuilder;