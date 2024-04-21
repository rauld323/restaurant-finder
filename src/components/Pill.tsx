import { FC, useRef } from "react";
import styled from "styled-components";
import { handleCopy } from "../helpers/copyToClipBoard";
import { FaRegCopy } from "react-icons/fa";

interface PostCodePillProps {
  text: string;
  copyText?: boolean;
}

const PostCodePill: FC<PostCodePillProps> = ({ text, copyText }) => {
  const copyPostCodeRef = useRef<HTMLButtonElement>(null);

  const handleCopyOnClick = () => {
    if (copyPostCodeRef.current && copyText) {
      const buttonText = copyPostCodeRef.current?.textContent;
      if (buttonText) {
        handleCopy(buttonText);
      }
    }
  };

  return (
    <StyledPillContainer ref={copyPostCodeRef} onClick={handleCopyOnClick}>
      {text}
      <FaRegCopy />
    </StyledPillContainer>
  );
};

export default PostCodePill;

const StyledPillContainer = styled.button`
  padding: 10px 10px;
  border-radius: 10px;
  color: white;
  background-color: #545470;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  outline: none;
  &:hover {
    color: #d4d4db;
  }
  &:active {
    color: #545470;
    background-color: white;
    border: solid 1px #545470;
  }
`;
