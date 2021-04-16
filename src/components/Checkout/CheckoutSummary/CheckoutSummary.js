import classes from "./CheckoutSummary.module.css";
import ToysPreview from "../../../components/Layout/Toys/ToysPreview/ToysPreview";
import Button from "../../UI/Backdrop/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <ToysPreview ingredients={{
          bear: 0, 
          car: 0,
          cat: 0,
          ball: 0,
          beanbag: 0,
          pyramid: 0,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;