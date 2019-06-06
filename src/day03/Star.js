/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Star.css";

class Star extends Component {
    render() {
        return (
            <div className={this.props.selected ? 'star selected' : 'star'}
                 onClick={this.props.onClick}></div>
        )
    }
}

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

export default Star;