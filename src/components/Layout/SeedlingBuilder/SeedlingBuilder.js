import classes from "./SeedlingBuilder.module.css";
import SeedlingPreview from "./SeedlingPreview/SeedlingPreview";
import SeedlingControls from "./SeedlingControls/SeedlingControls";


const SeedlingBuilder = () => {
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
    <div className={classes.SeedlingBuilder}>
      <SeedlingPreview ingredients={ingredients} />
      <SeedlingControls />
    </div>
  );
}


export default SeedlingBuilder;