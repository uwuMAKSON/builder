import SeedlingIngredient from "../SeedlingIngredient/SeedlingIngredient";
import classes from "./SeedlingPreview.module.css";

const SeedlingPreview = () => {
  return (
    <div className={classes.SeedlingPreview}>
      <div className={classes.seedling}>
        <SeedlingIngredient type="tomato" />
        <SeedlingIngredient type="tomato" />
        <SeedlingIngredient type="tomato" />
        <SeedlingIngredient type="tomato" />
        <SeedlingIngredient type="tomato" />
        <SeedlingIngredient type="tomato" />
        <SeedlingIngredient type="tomato" />
        <SeedlingIngredient type="salami" />
        <SeedlingIngredient type="olive" />
        <SeedlingIngredient type="mushroom" />
      </div>
    </div>
  );
}

export default SeedlingPreview;