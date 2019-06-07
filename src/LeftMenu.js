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
                    <li><NavLink to="/day01" uri="/day01" onClick={this.handleRoute}
                                 activeClassName="selected">Day01</NavLink></li>
                    <li><NavLink to="/day02" uri="/day02" onClick={this.handleRoute}
                                 activeClassName="selected">Day02</NavLink></li>
                    <li><NavLink to="/day03" uri="/day03" onClick={this.handleRoute}
                                 activeClassName="selected">Day03</NavLink></li>
                    <li><NavLink to="/day03-movie" uri="/day03-movie" onClick={this.handleRoute}
                                 activeClassName="selected">Day03MovieApp</NavLink></li>
                    <li><NavLink to="/day03-lifecycle" uri="/day03-lifecycle" onClick={this.handleRoute}
                                 activeClassName="selected">Day03LifeCycleApp</NavLink></li>
                    <li><NavLink to="/day04-fetch" uri="/day04-fetch" onClick={this.handleRoute}
                                 activeClassName="selected">Day04FetchApp</NavLink></li>
                    <li><NavLink to="/day04-highorder" uri="/day04-highorder" onClick={this.handleRoute}
                                 activeClassName="selected">Day04HighOrderComponent</NavLink></li>
                </ul>
            </div>
        )
    }
}


export default LeftMenu;