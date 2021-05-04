import { useDispatch } from "react-redux";
import Button from "../../../../UI/Backdrop/Button/Button";
import classes from "./ToysControl.module.css";
import Toys from "../../ToysIngredient/Toys"

const ToysControl = ({ type, count }) => {
const dispatch = useDispatch();
  return (
    <div className={classes.ToysControl}>
 <Button onClick={() => dispatch({type: "ADD_TOYS", toy:type })}>+</Button>
      <div className={classes.toy}>
        <Toys type={type} fixed />
      </div>
      <Button onClick={() => dispatch({type: "REMOVE_TOYS", toy:type  })} disable={!count}>-</Button>
    </div>
  );
}

export default ToysControl;
