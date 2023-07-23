import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  const [btnHiglighted,setBtnHighlighted] = useState(false)

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${ btnHiglighted ? classes.bump : ''}`

  // for the button bump animation on adding items to cart
  const{items} = cartCtx
  useEffect(()=>{
    if(items.length===0){
      return
    }
    setBtnHighlighted(true)

    const timer = setTimeout(()=>{
      setBtnHighlighted(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }
  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;