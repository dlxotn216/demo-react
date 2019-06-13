/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */

import React, {Component, Fragment} from "react";
import ScrollBox from "./ScrollBox";

/**
 * 컴포넌트 간 ref를 통해서 통신을 한다면 명백히 잘못 된 설계임을 주의
 */
class ComponentRef extends Component {

    handleScrollTop = (e) => {
        this.scrollBoxComponent.handleScrollTop(e);
    };

    handleScrollBottom = (e) => {
        this.scrollBoxComponent.handleScrollBottom(e);
    };

    render() {
        return (
            <Fragment>
                <button onClick={this.handleScrollTop}>ScrollToTop</button>
                <button onClick={this.handleScrollBottom}>ScrollToBottom</button>

                <ScrollBox
                    ref={ref => this.scrollBoxComponent = ref}
                />
            </Fragment>
        )
    }

}

export default ComponentRef;