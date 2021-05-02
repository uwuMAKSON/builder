import ToysPreview from "./ToysPreview/ToysPreview";
import ToysControls from "./ToysControls/ToysControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../../UI/Backdrop/Modal/Modal";
import classes from "./Toys.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Toys = () => {
  const prices = {
    ball: 280,
    beanbag: 170,
    pyramid:160,
  bear:200,
  bunny:150,
  girrafe:200,
 
  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [canBuy, setCanBuy] = useState(true);
  const [isBuying, setIsBuying] = useState(false);

  useEffect(() => {
    axios.get('https://builder-dfdc7-default-rtdb.firebaseio.com/default.json')
    .then(response => {
      setIngredients(response.data.ingredients);
      setPrice(response.data.price);
    });
  }, []);

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