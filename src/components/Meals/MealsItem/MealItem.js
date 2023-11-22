import react from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealItem = (props) => {
  // const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  const price = `$${props.price.toFixed(2)}`;
  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
    </>
  );
};

export default MealItem;
