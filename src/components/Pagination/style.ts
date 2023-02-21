import styled from "styled-components";

export const Container = styled.div `
       padding-left: 520px;
    padding-top: 39.5px;
    @media (max-width: 1280px) {
        padding-left: 310px;
    }
    @media (max-width: 768px) {
        padding-left: 200px;
    }
    @media (max-width: 540px) {
        padding-left:72px;
    }
    @media (max-width: 360px) {
       display: none;
    }
`
export const Container2 = styled.div`
display: none;
@media (max-width: 360px) {
       display: block;
    }
`