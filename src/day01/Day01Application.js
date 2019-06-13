/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import EventPractice from "./EventPractice";
import MultipleHandleInput from "./MultipleHandleInput";
import ValidationSample from "./ValidationSample";
import ComponentRef from "./ComponentRef";


/**
 * 항상 컴포넌트는 하나의 부모요소로 감싸야 함
 * -> Virdual DOM에서 컴포넌트 변화 감지 시 효율성을 위함
 * -> 쓸데없는 div가 필요
 * @constructor
 */
const UseDiv = () => (
    <div>
        <h3>Hello</h3>
        <h4>React</h4>
    </div>
);

/**
 * <Fragment> element를 통해 처리할 수 있음
 * @constructor
 */
const UseFragment = () =>
    (
        <Fragment>
            <h3>Hello</h3>
            <h4>React</h4>
        </Fragment>
    );

/**
 * {} 안에 자ㅂ스크립트 표현식을 사용할 수 있음
 *
 * 조건부 렌더링
 * - if문 대신 삼항 연산자를 사용
 * - && 연산자로 대체할 수 있음
 *
 * @returns {XML}
 * @constructor
 */
const UseJavascriptExpression = () => {
    const flag = true;
    const message = 'Hello React!';
    return (
        <Fragment>
            <p>{flag ? message : ''}</p>
            <p>{flag && message}</p>
        </Fragment>
    );
};

const UseInlineStyling = () => {
    const style = {
        backgroundColor: 'gray',
        border: '1px solid black',
        height: 300,
        width: 300,
        WebkitTransition: 'all',
        MozTransition: 'all'
    };

    //class는 className으로
    return (
        <div className="my-div">
            <div
                style={style}
                //자바스크립트 객체를 통해 inline style 적용 가능
            >
                // 여기엔 주석 못달음
            </div>
        </div>
    );
};

class UseProps extends Component {

    static defaultProps = {
        name: 'Default'
    };

    static propTypes = {
        name: PropTypes.string,
        // req: PropTypes.string.isRequired //필수 표시
    };

    /**
     * PropTypes.array
     * PropTypes.func
     * PropTypes.bool
     * PropTypes.number
     * PropTypes.object
     * PropTypes.symbol                     -> ES6 symbol 객체
     * PropTypes.node                       -> 렌더링 가능한 모든 것 (숫자, 문자열, element, 배열)
     * PropTypes.element                    -> React element
     * PropTypes.string
     * PropTypes.oneOf(['Male', 'Female']) -> 둘 중에 한 값
     * PropTypes.oneOfType([React.PropTypes.number])        -> 주어진 타입 중 하나
     * PropTypes.arrayOf(React.PropTypes.number)            -> 주어진 타입의 배열
     * PropTypes.objectOf(React.PropTypes.number)           -> 주어진 종류의 값을 가진 객체
     * PropTypes.shape({name: React.PropTypes.string, age: React.PropTypes.number}) -> 주어진 스키마를 가진 객체
     * PropTypes.any
     * @returns {XML}
     */

    render() {
        return (
            <div>
                Hello My name is {this.props.name}.
            </div>
        )
    }
}

class UseState extends Component {
    /*constructor(props) {
     super(props);
     this.state = {
     number: 0
     };
     }*/


    /*Constructor 밖에서도 State 초기화 가능*/
    state = {
        number: 0
    };

    render() {
        return (
            <Fragment>
                <p>Number is : {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>click
                </button>
            </Fragment>
        )
    }
}

class Day01Application extends Component {

    render() {
        return (
            <Fragment>
                <h1>UseFragment</h1>
                <UseFragment/>

                <h1>UseDiv</h1>
                <UseDiv/>

                <h1>UseJavascriptExpression</h1>
                <UseJavascriptExpression />

                <h1>UseInlineStyling</h1>
                <UseInlineStyling />

                <h1>UseProps</h1>
                <UseProps />
                <UseProps name="Lee"/>

                {
                    //<UseProps name={3}/> //렌더링은 되지만 오류찍힘
                }

                <h1>UseState</h1>
                <UseState />

                <h1>EventPractice</h1>
                <EventPractice />
                <h2>MultipleHandleInput</h2>
                <MultipleHandleInput />

                <h2>ValidationSample</h2>
                <ValidationSample />

                <h2>ComponentRef</h2>
                <ComponentRef />
            </Fragment>
        )
    }
}

export default Day01Application;