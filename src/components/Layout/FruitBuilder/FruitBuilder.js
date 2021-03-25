import classes from "./FruitBuilder.module.css";
import FruitPreview from "./FruitPreview/FruitPreview";
import FruitControls from "./FruitControls/FruitControls";

const FruitBuilder = () => {
  const ingredients = {
    pear: 20,
    apple: 20,
    banana: 20,
  };

  return (
    <div className={classes.FruitBuilder}>
      <FruitPreview ingredients={ingredients} />
      <FruitControls />
    </div>
  );
}

export default FruitBuilder;