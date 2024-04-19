import { FC, useRef } from "react";
import styled from "styled-components";
import { handleCopy } from "../helpers/copyToClipBoard";

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
    </StyledPillContainer>
  );
};

export default PostCodePill;

const StyledPillContainer = styled.button`
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 10px;
  color: white;
  background-color: #545470;
  cursor: pointer;
`;
