import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import styles from "./index.css";
import classnames from "classnames/bind";
import * as serviceWorker from "./serviceWorker";
import LeftMenu from "./LeftMenu";
import Day01Application from "./day01/Day01Application";
import RepeatComponent from "./day01-02.RepeatComponent/RepeatComponent";
import LifeCycleApplication from "./day01-03.lifecycle/LifeCycleApplication";
import FunctionalComponent from "./day02-01.Functional Component/FunctionalComponent";
import ComponentCssModuleApp from "./day02-02.ComponentStyle-CSS Module/ComponentCssModuleApp";
import ComponentStyledComponents from "./day02-03.ComponentStyle-Styled Components/ComponentStyledComponents";
import SassComponentSample from "./day03-01.ComponentStyle-Sass/SassComponentSample";

const cx = classnames.bind(styles);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={cx('left-wrap')}>
                    <LeftMenu />
                </div>
                <div className={cx('right-wrap')}>
                    <Route path="/day01-basic" component={Day01Application}/>
                    <Route path="/day01-repeat" component={RepeatComponent}/>
                    <Route path="/day01-lifecycle" component={LifeCycleApplication}/>
                    <Route path="/day02-functionalcomponent" component={FunctionalComponent}/>
                    <Route path="/day02-component-css-module" component={ComponentCssModuleApp}/>
                    <Route path="/day02-styled-components" component={ComponentStyledComponents}/>
                    <Route path="/day03-sass" component={SassComponentSample}/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();