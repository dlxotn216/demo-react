import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import LeftMenu from "./LeftMenu";
import Day01Application from "./day01/Day01Application";
import RepeatComponent from "./day01-RepeatComponent/RepeatComponent";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="left-wrap">
                    <LeftMenu />
                </div>
                <div className="right-wrap">
                    <Route path="/day01-basic" component={Day01Application}/>
                    <Route path="/day01-repeat" component={RepeatComponent}/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();