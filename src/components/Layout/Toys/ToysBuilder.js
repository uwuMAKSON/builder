import ToysPreview from "./ToysPreview/ToysPreview";
import ToysControls from "./ToysControls/ToysControls";
import classes from "./ToysBuilder.module.css";
import { useState } from "react";
// import axios from "axios";
import Modal from "../../UI/Backdrop/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../../UI/Backdrop/Button/Button";
import { useSelector } from "react-redux";

const ToysBuilder = ({ history }) => {
  const toys = useSelector(state => state.toys);
  const price = useSelector(state => state.price);
  const [ordering, setOrdering] = useState(false);
  // useEffect(loadDefaults, []);
  // function loadDefaults() {
  //   axios
  //     .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setToys(Object.values(response.data.toys));
  //       // For objects
  //       setToys(response.data.toys);
  //     });
  // }
  function startOrdering() {
    setOrdering(true);
  }
  function stopOrdering() {
    setOrdering(false);
  }
  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }
  return (
    <div className={classes.ToysBuilder}>
      <ToysPreview toys={toys} price={price}/>
      <ToysControls toys={toys} startOrdering={startOrdering}/>
      <Modal show={ordering} cancel={stopOrdering}>
      <OrderSummary toys={toys} price={price}/>
          <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default ToysBuilder;