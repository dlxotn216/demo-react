import React from "react";
import logo from "../../logo.svg";
import "./Day01App.css";
import Clock from "./Clock";
import Menu from "./Menu";
import Form from "./Form";

class IngredientsList extends React.Component {
    renderListItem(ingredient, i) {
        return React.createElement('li', {key: i}, ingredient);
    }

    render() {
        return React.createElement('ul', {className: 'ingredients'}, ['salmon', 'lemon'].map(this.renderListItem));
    }
}

const IngredientsList2 = props =>
    React.createElement('ul', {className: 'ingredients'},
        ['salmon', 'lemon'].map(
            (ingredient, i) => React.createElement('li', {key: i}, ingredient)
        ));

function TestApp() {
    return (
        <ul>
            {
                ['salmon', 'lemon'].map((ingredient, i) => <li key={i}>{ingredient}</li>)
            }
        </ul>
    );
}


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

function Day01App() {
    return (
        <div id="app" className="App App-wrap">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <IngredientsList />
            <IngredientsList2 />
            <TestApp />

            <Menu title="Menu" recipes={data}/>
            <Clock />
            <Form />
        </div>
    );
}

export default Day01App;
