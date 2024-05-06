import { styled } from "styled-components";

export const CommentText = styled.textarea`
  max-width: 100%;
  min-width: 400px;
  height: 150px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  resize: vertical;
  outline: none;
`;

export const TextInput = styled.input`
  min-width: 290px;
  max-width: 100%;
  padding: 10px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  outline: none;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-family: var(--sans-serif);
`;