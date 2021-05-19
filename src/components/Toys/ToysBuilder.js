import ToysPreview from "./ToysPreview/ToysPreview";
import ToysControls from "./ToysControls/ToysControls";
import classes from "./ToysBuilder.module.css";
import { useEffect, useState } from "react";
import Modal from "../UI/Backdrop/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Backdrop/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";
import axios from "../../axios";


const ToysBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const toys = useSelector(state => state.builder.toys);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    history.push('/checkout');
  }

  return (
    <div className={classes.ToysBuilder}>
      <ToysPreview
        toys={toys}
        price={price} />
      <ToysControls
        toys={toys}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            toys={toys}
            price={price}
            />
          <Button onClick={finishOrdering}
          green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default withAxios(ToysBuilder, axios); 