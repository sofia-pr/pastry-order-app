import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${classes.ClassName}`}>
      {props.children}
    </div>
  );
};

export default Card;
