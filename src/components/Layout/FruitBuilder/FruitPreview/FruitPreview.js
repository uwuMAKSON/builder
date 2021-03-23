import FruitIngredient from "../FruitIngredient/FruitIngredient";
import classes from "./FruitPreview.module.css";


const FruitPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<FruitIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.SeedlingPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${ingredientsBackground})` }}>
        {result}
      </div>
    </div>
  );
}



export default FruitPreview;