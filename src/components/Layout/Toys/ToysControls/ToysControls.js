import Button from "../../../UI/Backdrop/Button/Button";
import ToysControl from "./ToysControl/ToysControl";
import classes from "./ToysControls.module.css";

const ToysControls = ({
  toys,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const toy in toys) {
    // Add toy number to totals number
    total += toys[toy];
    // Render Toys control for this toy
    results.push(<ToysControl
        key={toy}
        count={toys[toy]}
        type={toy} />)
  }

  return (
    <div className={classes.ToysControls}>
      <strong>Toys</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}


export default ToysControls;