import ToysPreview from "../Layout/Toys/ToysPreview/ToysPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "../../axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios"


const Checkout = ({ history }) => {
  const toys = useSelector(state => state.builder.toys);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('/orders.json', {
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
 
export default withAxios(Checkout, axios);