/**
 * @author Lee Tae Su
 * @project demo-react
 * @version 1.0
 * @since 2019-06-14
 */

import React, {Component, Fragment} from "react";
import StyledButton from "./StyledButton";


const ComponentStyledComponents = () => {
    return (
        <div>
            <StyledButton big={true}>큰 버튼(big={'true'})</StyledButton>
            <StyledButton big>큰 버튼(big)</StyledButton>
            <StyledButton>기본 버튼</StyledButton>
        </div>
    )
};

export default ComponentStyledComponents;