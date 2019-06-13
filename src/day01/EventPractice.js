/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */
import React, {Component, Fragment} from "react";

class EventPractice extends Component {

    state = {
        message: ''
    };
    
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    //기본 메서드 선언은 반드시 this 바인드 필요
    handleChange(e) {
        //SyntheticEvent로 Native Event를 감싼 것이며 사용법은 같음
        this.setState({
            message: e.target.value
        });
    }
    
    //Property Initializer Syntax를 사요 ㅇ
    handleClick = (e) => {
        this.setState({
            message: ''
        })
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="message"
                    placeholder="Input anything"
                    value={this.state.message}
                    onChange={
                        this.handleChange
                    }
                />
                <button onClick={
                    this.handleClick
                }>확인
                </button>
            </div>
        )
            ;
    }
}

export default EventPractice