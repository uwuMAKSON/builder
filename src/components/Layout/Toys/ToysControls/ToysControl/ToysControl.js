import Button from "../../../../UI/Button/Button";
import ToysIngredient from "../../ToysIngredient/ToysIngredient";
import classes from "./ToysControl.module.css";

const ToysControl = ({ type, add, remove }) => {
  return (
    <div className={classes.ToysControl}>
 <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <ToysAll type={type} fixed />
      </div>
      <Button onClick={() => remove(type)}>-</Button>
    </div>
  );
}

export default ToysControl;
