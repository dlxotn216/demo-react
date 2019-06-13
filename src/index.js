import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import "./index.css";
import Day01App from "./Learning React/day01/Day01App";
import * as serviceWorker from "./serviceWorker";
import LeftMenu from "./LeftMenu";
import Day02App from "./Learning React/day02/Day02App";
import Day03App from "./Learning React/day03/Day03App";
import Day03MovieApp from "./Learning React/day03-01-movieapp/Day03MovieApp";
import Day03LifeCycleApp from "./Learning React/day03-02-lifecyclle/Day03LifeCycleApp";
import Day04FetchApp from "./Learning React/day04-fetch/Day04FetchApp";
import Day04HighOrderComponent from "./Learning React/day04-highorder-component/Day04HighOrderComponent";
import Day06ReactReduxApp from "./Learning React/day06-react-redux/Day06ReactReduxApp";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="left-wrap">
                    <LeftMenu />
                </div>
                <div className="right-wrap">
                    <Route path="/day01" component={Day01App}/>
                    <Route path="/day02" component={Day02App}/>
                    <Route path="/day03" component={Day03App}/>
                    <Route path="/day03-movie" component={Day03MovieApp}/>
                    <Route path="/day03-lifecycle" component={Day03LifeCycleApp}/>
                    <Route path="/day04-fetch" component={Day04FetchApp}/>
                    <Route path="/day04-highorder" component={Day04HighOrderComponent}/>
                    <Route path="/day06-react-redux" component={Day06ReactReduxApp}/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();