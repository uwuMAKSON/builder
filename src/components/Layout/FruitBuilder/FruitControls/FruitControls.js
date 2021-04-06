import FruitControl from "./FruitControl/FruitControl";
import classes from "./FruitControls.module.css";

const FruitControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<FruitControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.FruitControls}>
      <strong>Ingredients</strong>
      {results}
      <button>Order</button>
    </div>
  );
}

export default FruitControls;