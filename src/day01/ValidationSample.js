/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */

import React, {Component, Fragment} from "react";
import "./ValidationSample.css";

/**
 * Event 핸들링
 * DOM ref 사용법
 */
class ValidationSample extends Component {

    passwordInput;

    state = {
        password: '',
        clicked: false,
        validated: false
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === 'password'
        });
        this.passwordInput.focus();
    };

    render() {
        return (
            <Fragment>
                <input type="password"
                       name="password"
                       ref={(ref) => this.passwordInput = ref}  //DOM에 ref 사용 (focusing, scrollbox 컨트롤, Canvas 등은 어쩔수 없이 사용해야 함)
                       value={this.state.password}
                       onChange={this.handleChange}
                       className={
                           this.state.clicked
                               ? (this.state.validated ? 'success' : 'failure')
                               : ''
                       }
                />
                <button onClick={this.handleButtonClick}>Validate</button>
            </Fragment>
        )
    }

}

export default ValidationSample;