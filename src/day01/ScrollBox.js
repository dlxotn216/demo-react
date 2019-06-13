/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */

import React, {Component, Fragment} from "react";

class ScrollBox extends Component {

    handleScrollTop = (e) => {
        this.box.scrollTop = 0;
    };
    
    handleScrollBottom = (e) => {
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    };

    render() {
        const style = {
            border: '1px solid black',
            height: 300,
            width: 300,
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: 650,
            background: 'linear-gradient(white, black)'
        };

        return (
            <div
                style={style}
                ref={ref => this.box = ref}>
                <div style={innerStyle}/>
            </div>
        )
    }

}

export default ScrollBox;