/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */
import React, {Component, Fragment} from "react";

/**
 * 여러 input에 handleChange 적용 법
 */
class MultipleHandleInput extends Component {

    state = {
        message: '',
        title: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    //Property Initializer Syntax를 사요 ㅇ
    handleClick = (e) => {
        this.setState({
            message: '',
            title: ''
        })
    };

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick(e);
        }
    };

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Input title"
                        value={this.state.title}
                        onChange={
                            this.handleChange
                        }
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="message"
                        placeholder="Input message"
                        value={this.state.message}
                        onChange={
                            this.handleChange
                        }
                        onKeyPress={
                            this.handleKeyPress
                        }
                    />
                </div>
                <div>
                    <button onClick={
                        this.handleClick
                    }>확인
                    </button>
                </div>
            </Fragment>
        )
            ;
    }
}

export default MultipleHandleInput