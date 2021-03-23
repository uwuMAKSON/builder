import classes from "./FruitgBuilder.module.css";
import FruitgPreview from "./FruitPreview/FruitPreview";
import FruitgControls from "./FruitControls/FruitControls";


const FruitBuilder = () => {
  const ingredients = {
    Apple: 10,
    Pear: 10,
    Peach: 10,
    Apricot: 10,
    Plum: 10,
    Cherry: 10,
    Berries: 10,
  };

  return (
    <div className={classes.FruitBuilder}>
      <FruitPreview ingredients={ingredients} />
      <FruitControls />
    </div>
  );
}


export default FruitBuilder;