/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

class UpdatingLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Component init'
        };
    }

    static propTypes = {
        onClick: PropTypes.func,
        count: PropTypes.number,
        name: PropTypes.string.isRequired
    };

    static defaultProps = {
        onClick: () => {
        },
        count: 0
    };
    
    componentWillMount(){
        this.style = {
            backgroundColor: '#CCC'
        }
    }

    /**
     * 새 프로퍼티가 컴포넌트에 전달 된 경우에 호출 됨.
     * setState를 호출할 수 있는 유일한 갱신 생명주기 메소드임
     * 
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        console.log(`${this.props.name} componentWillReceiveProps`)
        this.setState({
            message: `${nextProps.name} updated count as ${nextProps.count}` 
        })
    }

    /**
     * 갱신을 막을 수 있는 술어 함수로
     * 꼭 필요한 경우엥만 갱신하도록 하여 성능개선 가능
     * -> 반드시 값을 반환 해야 함
     *
     * 조건 검사 없이 true를 리턴할 경우 로그
     * child1 componentWillReceiveProps
     * child1 shouldComponentUpdate
     * child1 componentWillUpdate
     * child1 render
     * child2 componentWillReceiveProps
     * child2 shouldComponentUpdate
     * child2 componentWillUpdate
     * child2 render
     * child3 componentWillReceiveProps
     * child3 shouldComponentUpdate
     * child3 componentWillUpdate
     * child3 render
     * child4 componentWillReceiveProps
     * child4 shouldComponentUpdate
     * child4 componentWillUpdate
     * child4 render
     * child1 componentDidUpdate
     * child2 componentDidUpdate
     * child3 componentDidUpdate
     * child4 componentDidUpdate
     *
     * 이전 프로퍼티와 비교하는 구문 추가한 경우 로그
     * child1 componentWillReceiveProps
     * child1 shouldComponentUpdate
     * child2 componentWillReceiveProps
     * child2 shouldComponentUpdate
     * child2 componentWillUpdate
     * child2 render
     * child3 componentWillReceiveProps
     * child3 shouldComponentUpdate
     * child4 componentWillReceiveProps
     * child4 shouldComponentUpdate
     * child2 componentDidUpdate
     *
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`${this.props.name} shouldComponentUpdate`);

        return this.props.count !== nextProps.count;
        // return true;
    }

    /**
     * 컴포넌트 갱신 직전에 호출 됨
     * -> 변경이 필요한 컴포넌트에게만 어떤 전처리가 필요한 경우 
     * 
     * @param nextProps
     * @param nextState
     */
    componentWillUpdate(nextProps, nextState) {
        console.log(`${this.props.name} componentWillUpdate`)
        this.style = null;
    }

    render() {
        console.log(`${this.props.name} render`);
        return (
            <div style={this.style}>
                <p>{this.state.message}</p>
                <button onClick={this.props.onClick}>{this.props.name}</button>
                <p>{this.props.count}</p>
            </div>
        )
    }

    /**
     * 컴포넌트 갱신이 일어난 직후
     * 즉, render를 호출한 다음에 호출 됨
     * 
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState) {
        console.log(`${this.props.name} componentDidUpdate`)
    }
}

export  default UpdatingLifeCycle;