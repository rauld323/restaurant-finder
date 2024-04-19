import { FC, useRef } from "react";
import styled from "styled-components";
import { handleCopy } from "../helpers/copyToClipBoard";

interface PostCodePillProps {
  postCode: string;
}

const PostCodePill: FC<PostCodePillProps> = ({ postCode }) => {
  const copyPostCodeRef = useRef<HTMLButtonElement>(null);

  const handleCopyOnClick = () => {
    if (copyPostCodeRef.current) {
      const buttonText = copyPostCodeRef.current?.textContent;
      if (buttonText) {
        handleCopy(buttonText);
      }
    }
  };

  return (
    <StyledPillContainer ref={copyPostCodeRef} onClick={handleCopyOnClick}>
      {postCode}
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
