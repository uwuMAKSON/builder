import { useDispatch } from "react-redux";
import Button from "../../../../UI/Backdrop/Button/Button";
import classes from "./ToysControl.module.css";
import ToysIngredient from "../../ToysIngredient/ToysIngredient"

const ToysControl = ({ type, count }) => {
const dispatch = useDispatch();
  return (
    <div className={classes.ToysControl}>
 <Button onClick={() => dispatch({type: "ADD_INGREDIENT", type })}>+</Button>
      <div className={classes.ingredient}>
        <ToysIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch({type: "REMOVE_INGREDIENT", type })} disable={!count}>-</Button>
    </div>
  );
}

export default ToysControl;
