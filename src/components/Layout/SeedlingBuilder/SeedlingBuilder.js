import classes from "./SeedlingBuilder.module.css";
import SeedlingPreview from "./SeedlingPreview/SeedlingPreview";
import SeedlingControls from "./SeedlingControls/SeedlingControls";
import SeedlingIngredient from "./SeedlingIngredient/SeedlingIngredient";

const SeedlingBuilder = () => {
  return (
    <div className={classes.SeedlingBuilder}>
      <SeedlingPreview />
      <SeedlingControls />
      <SeedlingIngredient />
    </div>
  );
}

export default SeedlingBuilder;