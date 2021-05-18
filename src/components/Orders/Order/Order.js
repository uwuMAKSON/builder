import classes from "./Order.module.css";

const Order = ({ name, phone, address, toys }) => {
  const output = Object.keys(toys)
    .map(label => <em key={label}>{label}: - {toys[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name: {name}</li>
      <li>Phone: {phone}</li>
      <li>Address: {address}</li>
      <li>Toys Shop: {output}</li>
    </ul>
  );
}

export default Order;