/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-07
 */
import React, {Component} from "react";

const ExpandableMessage = ({stateCollapsed, message, onToggle}) =>
    <div>
        <p onClick={onToggle} style={{cursor: 'pointer'}}>
            {
                (stateCollapsed) ?
                    message :
                    '(Open)'
            }
        </p>
    </div>
;

export default ExpandableMessage;
