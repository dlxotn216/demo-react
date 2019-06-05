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
                </ul>
            </div>
        )
    }
}


export default LeftMenu;