import FruitIngredient from "../../FruitIngredient/FruitIngredient";
import classes from "./FruitControl.module.css";

const FruitControl = ({ type, add, remove }) => {
  return (
    <div className={classes.FruitControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.ingredient}>
        <FruitIngredient type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default FruitControl;