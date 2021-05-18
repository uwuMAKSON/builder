import Button from "../../UI/Backdrop/Button/Button";
import classes from "./CheckoutForm.module.css"
const CheckoutForm = ({submitCallback, cancelCallback }) => {
    return (  <form className={classes.CheckoutForm} onSubmit={submitCallback}>
        <div>
        <label htmlFor="name" >Name</label>
        <input type="text" id="name" name="name" required placeholder="Maksim"></input>
        </div>
        <div>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" required placeholder="Mars"></input>
        </div>
         <div>
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="0704499812" required pattern="0[0-9]{9}"></input>
        </div>
        <Button >Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
    </form>

 );
}
 
export default CheckoutForm;