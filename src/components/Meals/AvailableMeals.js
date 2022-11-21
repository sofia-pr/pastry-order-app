import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Muffin de arándanos",
    description: "Mufin relleno de arándanos dulces y jugosos.",
    price: 3.9,
  },
  {
    id: "m2",
    name: "Lemon Pie",
    description:
      "Crujiente base de masa quebrada, crema de limón y terminación de merengue italiano.",
    price: 5.7,
  },
  {
    id: "m3",
    name: "Cheesecake",
    description:
      "Base de galleta crujiente, crema de queso y frutos del bosque.",
    price: 5.9,
  },
  {
    id: "m4",
    name: "Sacher",
    description:
      "Dos gruesas capas de esponjoso bizcocho de chocolate, rellenas de mermelada de durazno y cubiertas en un brillante glaseado de chocolate negro.",
    price: 4.9,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Card>
      <section className={classes.meals}>
        <ul>{mealList}</ul>
      </section>
    </Card>
  );
};
export default AvailableMeals;
