/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */

import React, {Component} from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    };

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor')
    }

    handleClick = (e) => {
        this.setState({
            number: this.state.number + 1
        });
    };

    /**
     * Component가 만들어지고 첫 렌더링을 마칠 때 실행 됨
     * -> 특정 라이브러리, 함수 호출, 이벤트 등록, setTimeout, setInterval
     */
    componentDidMount() {
        console.log('componentDidMount');
    }

    /**
     * props로 받아온 값을 state에 넣을 수 있음
     * -> setState를 호출하지 않는 점 주의
     * 
     * null이 아닌 것을 반환한다면 shouldComponentUpdate 메소드의 nextState에 기존 상태와 합쳐서 전달 됨
     * @param nextProps
     * @param prevState
     * @returns {*}
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return {color: nextProps.color, test: 'check test merged state'};
        }
        return null;        //state를 변경할 필요가 없다면
    }

    /**
     * Component를 업데이트 해야 하는 지에 대한 여부 반환
     * 
     * @param nextProps
     * @param nextState
     * @param nextContext
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 0;
    }

    /**
     * 실제 랜더링이 일어나며 this.forceUpdate를 호출 함
     * @returns {XML}
     */
    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h3 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h3>
                <p>Color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }

    /**
     * Render 이후 호출 되며 DOM에 변화를 반영하기 바로 직전에 호출 됨
     * -> 업데이트 전 스크롤바의 위치 유지와 같은 직전값에 대한 참고가 필요할 때 사용
     * 
     * 여기서 반환한 값이
     * componentDidUpdate의 snapshot 파라미터로 전달 됨
     * 
     * @param prevProps
     * @param prevState
     * @returns {*}
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return {color: this.myRef.style.color}
        }
        return null;
    }

    /**
     * 리렌더링을 완료한 후 실행 함.
     * DOM과 관련된 처리가 가능하며 prefProps, prefeState를 통해 이전에 컴포넌트가 가진 데이터 접근 가능
     * 
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        if (snapshot) {
            console.log('업데이트 되기 직전 색상 :', snapshot);
        }
    }

    /**
     * Component가 DOM에서 제거될 때 호출 됨
     */
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default LifeCycleSample;