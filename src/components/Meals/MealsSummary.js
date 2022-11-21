import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>La pastelería mas fina, a la puerta de su casa...</h2>
      <p>
        Elija su postre favorito de nuestra amplia selección y disfrute de un
        delicioso desayuno o merienda en casa.
      </p>
      <p>
        Todos nuestros productos con frescos y se elaboran con ingredientes de
        alta calidad por pasteleros experimentados!
      </p>
    </section>
  );
};

export default MealsSummary;
