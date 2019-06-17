/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-17
 */
import React, {Component} from "react";
import styles from "./SassComponentSample.scss";
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class SassComponentSample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={cx('MyComponent')}>
                <div className={cx('something-inside')}>Hello Something</div>
            </div>
        )
    }
}

export default SassComponentSample;