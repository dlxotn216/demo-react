/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-14
 */

import React, {Component, Fragment} from "react";
import styles from "./ComponentCssModuleApp.css";
import classNames from 'classnames';

const cx = classNames.bind(styles);

// console.log(styles);
// console.log(cx);
// console.log(cx(styles.box3, styles.green));
// console.log(cx('box3', 'green'));

/**
 * https://velog.io/@velopert/react-component-styling 참조
 * 
 * cssModule 보다는 styled-cmoponents를 주로 사용
 */
class ComponentCssModuleApp extends Component {
    render() {
        return (
            <Fragment>
                <div className={[styles.box, styles.blue].join(' ')}>by using styles</div>
                <div className={classNames(styles.box2, styles.red)}>by using classNames(styles.box2...)</div>
                <div className={cx(styles.box3, styles.green)}>by using classNames cx(styles.box3...)</div>
                <div className={cx('box3', 'green')}>by using classNames cx(box3...)동작하지 않음</div>
                <div className={cx({[styles.bar]: true, [styles.duck]:false}, styles.custom)}>조건절 사용</div>
            </Fragment>
        )
    }
}

export default ComponentCssModuleApp;