/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */
import React from "react";
import PropTypes from "prop-types";

class MyDropdown extends React.Component {

    constructor(props) {
        super(props);
    }

    //정적 프로퍼티를 통해 정의
    static propTypes = {
        defaultValue: PropTypes.string,
        defaultLabel: PropTypes.string,
        options: PropTypes.array
    };

    static defaultProps = {
        defaultValue: null,
        defaultLabel: '-----------------------',
        options: []
    };

    render() {
        return (
            <div>
                <ul>
                    <li key={this.props.defaultValue}>{this.props.defaultLabel}</li>
                    {
                        this.props.options.map((option) =>
                            <li key={option.value}>{option.label}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

// 클래스 밖에서 아래와 같이 정의 가능

// MyDropdown.propTypes = {
//     defaultValue: PropTypes.string,
//     defaultLabel: PropTypes.string,
//     options: PropTypes.array
// };
//
// MyDropdown.defaultProps = {
//     defaultValue: null,
//     defaultLabel: '-----------------------',
//     options: []
// };

export default MyDropdown;