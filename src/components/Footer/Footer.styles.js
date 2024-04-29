import styled from "styled-components";

export const SocialFooter = styled.footer`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: var(--sage);
font-family: var(--sans-serif);
color: white;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const SocialIcons = styled.div`
 a {
    color: white;
    margin: 0 10px;
    font-size: 24px;
  }
   & a:hover {
    color: lightgray;
  }`;

  export const Copyright = styled.p`
  font-size: 16px;
  `;