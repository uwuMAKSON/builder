import classes from "./CheckoutSummary.module.css";
import ToysPreview from "../../../components/Layout/Toys/ToysPreview/ToysPreview";
import Button from "../../UI/Backdrop/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <ToysPreview ingredients={{
          bear: 1, 
          car: 1,
          cat: 1,
          ball:1,
          beanbag: 1,
          pyramid: 1,
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