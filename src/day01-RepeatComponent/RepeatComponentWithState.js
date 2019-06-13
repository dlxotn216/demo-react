/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */

import React, {Component, Fragment} from "react";

class RepeatComponentWithState extends Component {
    state = {
        names: []
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleAdd = (e) => {
        this.setState({
            name: '',
            names: [
                ...this.state.names,
                this.state.name
            ]
        });
        this.nameInput.focus();
    };

    handleRemove = (i) => {
        /*this.setState({
            names: [
                ...this.state.names.slice(0, i),
                ...this.state.names.slice(i + 1, this.state.names.length)
            ]
        });*/
        //or
        this.setState({
            names: this.state.names.filter((name, idx) => idx !== i)
        });
    };


    render() {
        return (
            <Fragment>
                <input type="text"
                       name="name"
                       value={this.state.name}
                       ref={ref => this.nameInput = ref}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleAdd}>추가</button>
                <ul>
                    {
                        this.state.names.map((name, i) =>
                            <li key={i}>{name} <span onClick={() => this.handleRemove(i)}>X</span></li>)
                    }
                </ul>
            </Fragment>
        )
    }
}

export default RepeatComponentWithState;
