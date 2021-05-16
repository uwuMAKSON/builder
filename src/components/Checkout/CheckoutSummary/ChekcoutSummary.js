import ChacoutForm from "./ChackoutForm/ChackoutForm";
import ToysPreview from "../../Layout/Toys/ToysPreview/ToysPreview";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
    
      <ToysPreview animals={{
    ball: 1,
    beanbag: 1,
    robot:1,
    bear:1,
    bunny:1,
    girrafe:1,
      }} price={2000} />
      
     <ChacoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;