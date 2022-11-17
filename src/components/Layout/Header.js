import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./Header.module.css";
import donutsImage from "../../assets/donas.jpg";

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>La Douce Rose</h1>
        <button onClick={props.onShowCart} className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={donutsImage} alt="donuts" />
      </div>
      
    </Fragment>
  );
};

export default Header;
