/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-14
 */
import React, {Component, Fragment} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div `
    border: 1px solid black;
    display: inline-block;
    padding: 1rem;
    border-radius: 3px;
    font-size: ${(props) => props.fontSize}
    ${
    (props) => props.big && `
        font-size: 2rem;
        padding: 2rem;
    `
    }
    &:hover {
        background: black;
        color: white;
    }
`;

const StyledButton = ({children, big, ...rest}) => {
    return (
        <Fragment>
            <Wrapper fontSize="1.25rem" {...rest} big={big}>
                {children}
            </Wrapper>
        </Fragment>
    )
};

StyledButton.propTypes = {
    big: PropTypes.bool,
    fontSize: PropTypes.string
};

export default StyledButton;