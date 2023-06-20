import React, { useRef, useState } from "react";
import classes from './Checkout.module.css'


const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim().length !== 5;
const Checkout = props => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();
    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = !isNotFiveChars(enteredPostal);
        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid
        });
        const formValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid

        if (!formValid) {
            return;
        }
        props.onConfirm({
            name:enteredName,
            street:enteredStreet,
            postalCode:enteredPostal,
            city:enteredCity
        })
    };
const nameControlClasses=`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;
const streetControlClasses=`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`;
const postalControlClasses=`${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`;
const cityControlClasses=`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`;
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputValidity.name && <p>Please Enter a Valid Name</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputValidity.street && <p>Please Enter a Valid Street</p>}
            </div>
            <div className={postalControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputValidity.postalCode && <p>Please Enter a Valid postalCode(it should be 5 length)</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputValidity.city && <p>Enter Valid Input</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
};
export default Checkout;