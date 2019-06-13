import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Day01App from "./Day01App";

import * as serviceWorker from "../../serviceWorker";
import Menu from "./Menu";
import Clock from "./Clock";
import Form from "./Form";

ReactDOM.render(<Day01App />, document.getElementById('root'));

class IngredientsList extends React.Component {
    renderListItem(ingredient, i) {
        return React.createElement('li', {key: i}, ingredient);
    }

    render() {
        return React.createElement('ul', {className: 'ingredients'}, ['salmon', 'lemon'].map(this.renderListItem));
    }
}
ReactDOM.render(<IngredientsList />, document.getElementById('root2'));

const IngredientsList2 = props =>
    React.createElement('ul', {className: 'ingredients'},
        ['salmon', 'lemon'].map(
            (ingredient, i) => React.createElement('li', {key: i}, ingredient)
        ));

ReactDOM.render(<h3>Test03</h3>, document.getElementById('root4'));
ReactDOM.render(<IngredientsList2 />, document.getElementById('root3'));


function TestApp() {
    return (
        <ul>
            {
                ['salmon', 'lemon'].map((ingredient, i) => <li key={i}>{ingredient}</li>)
            }
        </ul>
    );
}
ReactDOM.render(<TestApp />, document.getElementById('root4'));

const data = [
    {
        name: 'Baked salmon',
        ingredients: [
            {name: '연어', amount: 500, mesurement: 'gram'},
            {name: '잣', amount: 1, mesurement: '컵'}
        ]
    },
    {
        name: '생선 타코',
        ingredients: [
            {name: '생선', amount: 500, mesurement: 'gram'},
            {name: '치즈', amount: 1, mesurement: '컵'}
        ]
    }
];



ReactDOM.render(<Menu title="Menu" recipes={data} />, document.getElementById('react-container'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<Form />, document.getElementById('form'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
