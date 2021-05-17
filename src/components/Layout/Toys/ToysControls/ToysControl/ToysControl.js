import { useDispatch} from "react-redux";
import Button from "../../../../UI/Backdrop/Button/Button";
import classes from "./ToysControl.module.css";

const ToysControl = ({ type, count }) => {
const dispatch = useDispatch();
const names = {
  ball: "Ball",
  beanbag: "Beanbag",
  robot:"Robot",
  bear:"Bear",
  bunny:"Bunny",
  girrafe:"Girrafe",
  
}
  return (
  <div className={classes.ToysControl}>
 <Button onClick={() =>
  dispatch({type: "ADD_TOY", toy:type })}>+</Button>
  <div className={classes.toy}>{names[type]}</div>
  <Button onClick={() =>
  dispatch({type: "REMOVE_TOY", toy:type })}
  disable={!count ? "disabled" : undefined}>-</Button>
    </div>
  );
}

export default ToysControl;
