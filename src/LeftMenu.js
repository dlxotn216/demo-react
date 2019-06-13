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
                </ul>
            </div>
        )
    }
}


export default LeftMenu;