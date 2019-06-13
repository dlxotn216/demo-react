/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */
import React, {Component} from "react";
import MessageList from "./MessageList";

class MountingLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            date: new Date()
        };
        this.messages = [];
        this.logging('constructor');
        //setState 호출 불가능
    }

    /**
     * 컴포넌트가 마운트 ㅈ되기 직전에 호출 됨
     */
    componentWillMount() {
        this.logging('componentWillMount');
        this.updateMessagesState(this.messages);
        //setState를 호출해도 갱신 life cycle method가 호출되지 않음
        //단 비동기 호출 시 주의
    }

    render() {
        this.logging('render');
        //setState 호출 시 무한루프
        return (
            <div>
                <p>MountingLifeCycle</p>
                <MessageList messages={this.state.messages}/>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }

    /**
     * 렌더링 직후에 호출 됨
     * -> DOM을 사용하는 서드파티 자바스크립트를 초기화하기 좋음
     * 앵귤러의 AfterViewInit 라이프사이클과 유사한 시점
     *
     * -> 타이머 같은 백그라운드 프로세스를 초기화 하기에도 적합 함
     */
    componentDidMount() {
        this.logging('componentDidMount');
        this.updateMessagesState(this.messages);

        this.ticking = setInterval(() => {
            this.setState({
                date: new Date()
            });
            // console.log('update date');
        }, 1000)
    }

    /**
     * 언마운트 (컴포넌트 소멸) 직전에 호출
     *
     * -> 백그라운드 프로세스를 해제하기에 적합 함
     */
    componentWillUnmount() {
        this.logging('componentWillUnmount');
        this.updateMessagesState(this.messages);

        clearInterval(this.ticking);
        //주석 후 확인 해볼 것
    }

    logging = (message) => {
        // console.log(message);
        this.messages.push(message);
    };

    updateMessagesState(messages) {
        this.setState({
            messages: [
                ...messages
            ]
        });
    }
}

export default MountingLifeCycle;