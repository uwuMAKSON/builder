import classes from "./FruitBuilder.module.css";
import FruitPreview from "./FruitPreview/FruitPreview";
import FruitControls from "./FruitControls/FruitControls";

const FruitBuilder = () => {
  const ingredients = {
    pear: 80,
    pear: 80,
    pear: 80,
    pear: 80,
    pear: 80,
    pear: 80,
  };

  return (
    <div className={classes.FruitBuilder}>
      <FruitPreview ingredients={ingredients} />
      <FruitControls />
    </div>
  );
}

export default FruitBuilder;