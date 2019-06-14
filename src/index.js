import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import LeftMenu from "./LeftMenu";
import Day01Application from "./day01/Day01Application";
import RepeatComponent from "./day01-02.RepeatComponent/RepeatComponent";
import LifeCycleApplication from "./day01-03.lifecycle/LifeCycleApplication";
import FunctionalComponent from "./day02-01.Functional Component/FunctionalComponent";
import ComponentCssModuleApp from "./day02-02.ComponentStyle-CSS Module/ComponentCssModuleApp";
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
                    <Route path="/day01-lifecycle" component={LifeCycleApplication}/>
                    <Route path="/day02-functionalcomponent" component={FunctionalComponent}/>
                    <Route path="/day02-component-css-module" component={ComponentCssModuleApp}/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();