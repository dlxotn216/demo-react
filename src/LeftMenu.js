import React, {Component} from "react";
import {NavLink, Route} from "react-router-dom";
import "./LeftMenu.css";

class LeftMenu extends Component {

    handleRoute(e) {
        if (e.target.pathname === window.location.pathname) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="left-menu">
                <ul>
                    <li><NavLink to="/day01-basic" uri="/day01-basic" onClick={this.handleRoute}
                                 activeClassName="selected">Day01Application</NavLink></li>
                    <li><NavLink to="/day01-repeat" uri="/day01-repeat" onClick={this.handleRoute}
                                 activeClassName="selected">RepeatComponent</NavLink></li>
                    <li><NavLink to="/day01-lifecycle" uri="/day01-lifecycle" onClick={this.handleRoute}
                                 activeClassName="selected">LifeCycleApplication</NavLink></li>
                    <li><NavLink to="/day02-functionalcomponent" uri="/day02-functionalcomponent" onClick={this.handleRoute}
                                 activeClassName="selected">FunctionalComponent</NavLink></li>
                    <li><NavLink to="/day02-component-css-module" uri="/day02-component-css-module" onClick={this.handleRoute}
                                 activeClassName="selected">ComponentCssModuleApp</NavLink></li>
                    <li><NavLink to="/day02-styled-components" uri="/day02-styled-components" onClick={this.handleRoute}
                                 activeClassName="selected">ComponentStyledComponents</NavLink></li>
                    <li><NavLink to="/day03-sass" uri="/day03-sass" onClick={this.handleRoute}
                                 activeClassName="selected">SassComponentSample</NavLink></li>
                </ul>
            </div>
        )
    }
}


export default LeftMenu;