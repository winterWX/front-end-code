import styled from "styled-components";

export const TopDiv = styled.div`
    font-size: 30px;
    color: wheat;

    .title{
        font-size: 50px;
        color: yellow;

        &.titleDefalut{
            text-decoration: underline;
        }
    }

    .span_style{
        font-size: 10px;
        color: blanchedalmond;
        background-color: blue;
    }
    .pContext{
        background-color:${ props=> props.bgColor}
    }
`