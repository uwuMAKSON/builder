import ToysAll from "../ToysIngredient/ToysIngredient";
import classes from "./ToysPreview.module.css";


const ToysPreview = ({ ingredients,price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<ToysAll key={ingredient + i} type={ingredient} />)
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