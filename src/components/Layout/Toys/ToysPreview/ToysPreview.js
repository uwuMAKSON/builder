import ToysAll from "../Toys/Toys";
import classes from "./ToysPreview.module.css";


const ToysPreview = ({ toys,price }) => {
  const result = [];
  for (const toy in toys) {
    for (let i = 0; i < toys[toy]; i++) {
      result.push(<ToysAll key={toy + i} type={toy} />)
    }
  }

  return (
    <div className={classes.ToysPreview}>
      <div
        className={classes.color}>
          <div className={classes.name}>{result}</div>
        
      </div>
      {/* <div className={classes.price}>{price} som</div> */}
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default ToysPreview;