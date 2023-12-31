import React, { useEffect, useState } from "react";
import classes from './AvilableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];
const Availablemeals = () => {
    const [meals, setMeals] = useState([]);
    const [httperror, setHttpError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        const fetchMeals = async () => {
            const response = await fetch('https://test-b866e-default-rtdb.firebaseio.com/meals.json');
            if (!response.ok) {
                throw new Error('Somthing went wrong')
            }
            const responseData = await response.json();
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false)
        };

        fetchMeals().catch(error => {
            setIsLoading(false);
            setHttpError(error.message)
            console.log(error.message);
        });

    }, []);
    if (isLoading) {
        return <section className={classes.isLoading}>
            <p>Is Loading...</p>
        </section>
    }
    if (httperror) {
        return <section className={classes.httpError}>
            <p>{httperror} helloo</p>
        </section>
    }
    const mealsList = meals.map(meal => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};
export default Availablemeals;