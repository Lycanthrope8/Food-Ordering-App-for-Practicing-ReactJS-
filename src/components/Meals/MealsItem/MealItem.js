import react, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";

const MealItem = (props) => {
  // const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) =>{
    cartCtx.addItem({
      id: props.id,
      name : props.name,
      amount : props.amount,
      price: props.price,
    })
  }

  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart = {addToCartHandler}/>
        </div>
      </li>
    </>
  );
};

export default MealItem;
