import ToysPreview from "../Layout/Toys/ToysPreview/ToysPreview";
import CheckoutForm from "../Checkout/CheckoutSummary/CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";
import { useSelector } from "react-redux";


const Checkout = ({ history }) => {
  const toys = useSelector(state => state.toys);
  const price = useSelector(state => state.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-dfdc7-default-rtdb.firebaseio.com/', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      toys: toys,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <ToysPreview toys={toys} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
 
export default Checkout;