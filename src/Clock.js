/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-04
 */
import React from "react";

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        console.log('check : componentDidMount' );
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        console.log('check : componentWillUnmount' );
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        
        //아래와 같이 직접 변경하지 말 것
        // this.state.date = new Date();
    }
    
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>      
        )
    };
}

export default Clock;