import Button from "../../../../UI/Backdrop/Button/Button";
// import ToysIngredient from "../../ToysIngredient/ToysIngredient";
import classes from "./ToysControl.module.css";

const ToysControl = ({ type, add, remove }) => {
  const name ={
    watermelon:"watermelon",
    pear:"pear",
    apple:"apple",
  grapes:"grapes",
  bear:"bear",
  }
  return (
    <div className={classes.ToysControl}>
 <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        {/* <ToysIngredient type={type} fixed /> */}
        {name[type]}
      </div>
      <Button onClick={() => remove(type)}>-</Button>
    </div>
  );
}

export default ToysControl;
