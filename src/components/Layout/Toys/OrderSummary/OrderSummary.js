import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    ball: "ball",
    beanbag: "beanbag",
    bear: "bear",
    car: "car",
    cat: "cat",
    pyramid: "pyramid",
  }
  const results = Object.keys(ingredients)
    .map(type => <li>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;