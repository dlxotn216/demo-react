/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-06
 */

import React, {Component} from "react";
import PropTypes from "prop-types";

const MessageList = (props) => (
    <ul>
        {
            props.messages.map((message, i) =>
                <li key={i}>{message}</li>
            )
        }
    </ul>
);

MessageList.propTypes = {
    messages: PropTypes.array
};

MessageList.defaultProps = {
    messages: []
};

export default MessageList;