import classes from "./OrderSummary.module.css";

const OrderSummary = ({ toys, price }) => {
  const labels = {
    ball: "ball",
    beanbag: "beanbag",
    bear: "bear",
    bunny: "bunny",
    robot: "robot",
    girrafe: "girrafe",
  }
  const results = Object.keys(toys)
    .map(type => <li key={type}>{labels[type]}: 
    {toys[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)}som</strong>
    </div>
  );
}

export default OrderSummary;