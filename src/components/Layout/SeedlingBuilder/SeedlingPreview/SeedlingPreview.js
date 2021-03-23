import SeedlingIngredient from "../SeedlingIngredient/SeedlingIngredient";
import classes from "./SeedlingPreview.module.css";


const SeedlingPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<SeedlingIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.SeedlingPreview}>
      <div className={classes.seedling}>
        {result}
      </div>
    </div>
  );
}


export default SeedlingPreview;