import classes from "./SeedlingBuilder.module.css";
import SeedlingPreview from "./SeedlingPreview/SeedlingPreview";
import SeedlingControls from "./SeedlingControls/SeedlingControls";

const SeedlingBuilder = () => {
  return (
    <div className={classes.SeedlingBuilder}>
      <SeedlingPreview />
      <SeedlingControls />
    </div>
  );
}

export default SeedlingBuilder;