/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-11
 */

import React, {Component} from "react";
import {createStore} from "redux";
import {connect, Provider} from "react-redux";

const ADD_TODO = 'ADD_TODO'

function addTodo(text) {
    return {
        type: ADD_TODO,
        text,
        id: Math.random()
    }
}

const initialState = {
    todos: []
};

function todoApp(state = {...initialState}, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        ...action,
                        completed: false
                    }
                ]
            });
        default:
            return state
    }
}

const store = createStore(todoApp);

class App extends Component {

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };
    
    submit = (e) => {
        e.preventDefault();
        store.dispatch(addTodo(this.state.description))
    };
    
    render() {
        return (
            <div>

                <form onSubmit={this.submit}>
                    <input type="text" name="description" onChange={this.handleInputChange}/>
                    <button>add</button>
                </form>
                <MyToDoList />
            </div>
        )
    }
}

const TodoList = ({todos}) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} />
        ))}
    </ul>
);
const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
);

const mapStateToProps = state => ({
    todos: state.todos
});


const MyToDoList = connect(
    mapStateToProps
)(TodoList);

class Day06ReactReduxApp extends Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }

}

export default Day06ReactReduxApp