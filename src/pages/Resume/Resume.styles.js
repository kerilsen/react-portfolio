import styled from "styled-components";

export const ResumeContainer = styled.section`
width: 100%;
height: 1200px;
`;

export const ResumeFrame = styled.iframe.attrs({
title: "Resume PDF",
width: "100%",
height: "100%",
})`
border: none;
`;