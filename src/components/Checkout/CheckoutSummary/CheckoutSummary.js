
import classes from "./CheckoutSummary.module.css";
import ToysPreview from "../../../components/Layout/Toys/ToysPreview/ToysPreview"
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
  <ToysPreview toys={{
  bear: 1, 
  car: 1,
  cat: 1,
  ball:1,
  beanbag: 1,
  pyramid: 1,
}} price={1020} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default CheckoutSummary;  