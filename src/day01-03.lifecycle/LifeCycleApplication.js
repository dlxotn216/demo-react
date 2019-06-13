/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */

import React, {Component, Fragment} from "react";
import LifeCycleSample from "./LifeCycleSample";

class LifeCycleApplication extends Component {

    state = {
        color: '#000000'
    };

    getRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    };

    handleClick = () => {
        this.setState({
            color: this.getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <LifeCycleSample color={this.state.color}/>
            </div>
        )
    }

}

export default LifeCycleApplication;