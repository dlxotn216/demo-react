/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-04
 */
import React from "react";

const Recipe = (props) => (
    <div>
        <h4 className="title">{props.name}</h4>
        <p>재료</p>
        <ul>
            {
                props.ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)
            }
        </ul>
    </div>

);
export default Recipe;