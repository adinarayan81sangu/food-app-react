import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import Availablemeals from "./AvailableMeals";

const Meals=()=>{
    return<Fragment>
        <MealsSummary/>
        <Availablemeals/>
    </Fragment>
};
export default Meals;