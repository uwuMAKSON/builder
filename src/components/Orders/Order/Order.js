import classes from "./Order.module.css";

const Order = ({ name, phone, address, toys,price }) => {
  const output = Object.keys(toys).map(label => <em key={label}>{label} / {toys[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name:<strong>{name}</strong> </li>
      <li>Phone:<strong>{phone}</strong> </li>
      <li>Address:<strong>{address}</strong> </li>
      <li>Toys shop: {output}</li>
      <li className={classes.som} >the buy som :{price}</li>
      <li><strong>Thanks for your purchase</strong></li>  
    </ul>
  );
}

export default Order;