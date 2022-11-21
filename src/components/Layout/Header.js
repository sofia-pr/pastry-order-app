import { Fragment, useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./Header.module.css";
import pasteleria4 from "../../assets/pasteleria4.avif";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }

  }, [items]);

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Pastelería Velvet</h1>
        <button onClick={props.onShowCart} className={btnClasses}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Tu pedido</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={pasteleria4} alt="donuts"/>
      </div>
    </Fragment>
  );
};

export default Header;
