import Button from "../../UI/Backdrop/Button/Button";
import classes from "../CheckoutForm.module.css"

const CheckoutForm = ({ cancelCallback }) => {
    return (
        <form className={classes.CheckoutForm}>
<div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
</div>
<div>
    <label for="phon">Phon</label>
    <input type="tel" id="phon" name="phon" required />
</div>
<div>
    <label for="address">Address</label>
    <input type="text" id="address" name="address" required />
</div>
<Button>Checkout</Button>
<Button onClick={cancelCallback}>Cancel</Button>
        </form>
    );
}
export default CheckoutForm;