import classes from "./SeedlingIngredient.module.css";

const SeedlingIngredient = ({ type }) => {
  return (
    <div className={classes.SeedlingIngredient}>{type}</div>
  );
}

export default SeedlingIngredient;