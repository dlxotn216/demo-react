/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-14
 */
import React, {Fragment} from "react";
import PropTypes from "prop-types";

/**
 * 순수 함수를 이용한 컴포넌트
 * @param props
 * @returns {XML}
 * @constructor
 */
function Hello(props) {
    return (
        <div>Hello {props.name}!</div>
    )
}

Hello.propTypes = {
    name: PropTypes.string
};


/**
 * 람다를 이용한 컴포넌트 선언
 * @param props
 * @constructor
 */
const HelloByLambda = (props) => (
    <div>Hello {props.name} (by lambda)!</div>
);

HelloByLambda.propTypes = {
    name: PropTypes.string
};

const FunctionalComponent = () => (
    <Fragment>
        <Hello name="Lee"/>
        <HelloByLambda name="Lee"/>
    </Fragment>
);


//함수형 컴포넌트는 lifecycle, state등이 필요없는
//순수하게 표현만 필요한 경우에 사용하기 적합하다

export default FunctionalComponent;