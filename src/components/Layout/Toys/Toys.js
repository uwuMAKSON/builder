import ToysPreview from "./ToysPreview/ToysPreview";
import ToysControls from "./ToysControls/ToysControls";

import classes from "./ToysBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../UI/Backdrop/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../../UI/Backdrop/Button/Button";

const ToysBuilder = ({ history }) => {
 
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(loadDefaults, []);

  function loadDefaults() {
    axios
      .get('https://builder-dfdc7-default-rtdb.firebaseio.com/')
      .then(response => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.ingredients);
      });
  }
  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    axios
      .post('https://builder-a51d0-default-rtdb.firebaseio.com/orders.json', {
        ingredients: ingredients,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        loadDefaults();
        history.push('/checkout');
      });
  }

  return (
    <div className={classes.ToysBuilder}>
      <ToysPreview
        ingredients={ingredients}
        price={price} />
      <ToysControls
        ingredients={ingredients}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            />
          <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default ToysBuilder;