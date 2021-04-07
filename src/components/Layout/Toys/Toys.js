import ToysPreview from "./ToysPreview/ToysPreview";
import ToysControls from "./ToysControls/ToysControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import classes from "./Toys.module.css";
import { useState } from "react";

const Toys = () => {
  const prices = {
    watermelon: 80,
    pear: 70,
    apple:60,
    banana:40,
  grapes:20,
 
  };
  const [ingredients, setIngredients] = useState({
    watermelon: 0,
    pear: 0,
    apple: 0,
    banana:0,
    grapes:0,

  });


  const [price, setPrice] = useState(0);
  const [canBuy, setCanBuy] = useState(true);
  const [isBuying, setIsBuying] = useState(false);

  function checkCanBuy(newIngredients) {
    const totalIngredients = Object.values(newIngredients)
      .reduce((total, current) => total + current);
    setCanBuy(totalIngredients > 0);
  }


  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    checkCanBuy(newIngredients);
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]){
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    checkCanBuy(newIngredients);
    setPrice(price - prices[type]);
    setIngredients(newIngredients);
   } }

  return (
    <div className={classes.Toys}>
        <Modal show={isBuying} cancelCallback={() => setIsBuying(false)}>
       <OrderSummary ingredients={ingredients} price={price} /></Modal>
      <ToysPreview ingredients={ingredients}
      price={price} />
      <ToysControls
      
       canBuy={canBuy}
       setIsBuying={setIsBuying}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default Toys;