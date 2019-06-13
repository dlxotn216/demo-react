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

function addTodo(id, text) {
    return {
        type: ADD_TODO,
        text,
        id
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

    render() {
        return (
            <MyToDoList />
        )
    }
}

const TodoList = ({todos}) => {
    let _title;    
    const submit = (e) => {
        e.preventDefault();

        store.dispatch(addTodo(Math.random(), _title.value));
        _title.value = '';
        _title.focus();
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input ref={input => _title = input} type="text" name="description" />
                <button>add</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </div>
    )
};
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

const mapToDispatch = dispatch => ({
    onNewTodo(id, description) {
        dispatch(addTodo(id, description));
    }
});


const MyToDoList = connect(
    mapStateToProps,
    mapToDispatch
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