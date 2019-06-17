/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-17
 */
import React, {Component, Fragment} from "react";
import styles from "./SassComponentSample.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

class SassComponentSample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className={cx('MyComponent')}>
                    <div className={cx('something-inside')}>Hello Something</div>
                </div>
                <div className={cx('box')}>
                    Hello i'm boxx styled sass
                </div>
            </Fragment>
        )
    }
}

export default SassComponentSample;