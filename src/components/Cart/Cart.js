import { Fragment, useContext, useState } from 'react';
import Model from '../UI/Model';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [didSubmiting, setDidSubmiting] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };
    const cartAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    };
    const orderHandler = () => {
        setIsCheckout(true);
    }
    const submitOrderHandler = async (userData) => {
        setIsSubmiting(true);
        await fetch('https://test-b866e-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            }),
        });
        setIsSubmiting(false);
        setDidSubmiting(true);
        cartCtx.clearCart();
    }
    const cartItems = (<ul className={classes['cart-items']}>

        {cartCtx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartAddHandler.bind(null, item)}
            />
        ))}
    </ul>
    );
    const modelActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && (<button className={classes.button} onClick={orderHandler}>Order</button>)}
        </div>
    );
    const cartModelContent = <Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
        {!isCheckout && modelActions}
    </Fragment>
    const isSubmitingContent = <p>Sending orders Data</p>
    const didSubmitingContent =
        <Fragment>
            <p>Successfully send the Orders</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>Close</button>
            </div>
        </Fragment>

    return (
        <Model onClose={props.onClose}>
            {!isSubmiting && !didSubmiting && cartModelContent}
            {isSubmiting && isSubmitingContent}
            {!isSubmiting && didSubmiting && didSubmitingContent}
        </Model>
    );
};
export default Cart;