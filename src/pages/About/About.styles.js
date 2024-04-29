import styled from "styled-components";

/* Formatting an image with text flowing around it to the right */
export const TextWithImage = styled.section`
display: flex;
align-items: center;
`;

export const Image = styled.img`
flex-shrink: 0;
width: 200px;
height: auto;
margin-right: 20px;
`;
  
export const Text = styled.div`
flex: 1;
`;
