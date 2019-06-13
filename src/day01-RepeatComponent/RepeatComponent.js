/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-13
 */

import React, {Component, Fragment} from "react";
import RepeatComponentWithState from "./RepeatComponentWithState";

class RepeatComponent extends Component {
    render() {
        const names = ['lee', 'park', 'youung'];

        return (
            <Fragment>
                <ul>
                    {
                        names.map((name, i) => <li key={i}>{name}</li>)
                    }
                </ul>
                <RepeatComponentWithState />
            </Fragment>
        )
    }
}

export default RepeatComponent;
