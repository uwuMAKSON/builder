import Button from "../../../../UI/Backdrop/Button/Button";
import classes from "./ToysControl.module.css";

const ToysControl = ({ type, add, remove }) => {
  const name ={
    ball:"ball",
    beanbag:"beanbag",
    pyramid:"pyramid",
    cat:"cat",
    bear:"bear",
   bunny:"bunny",
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
