import { FC } from "react";
import styled from "styled-components";

interface HeroSectionProps {
  handleSubmit: (event: { preventDefault: () => void }) => void;
  handleInputChange: (event: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
  postCode: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  handleSubmit,
  postCode,
  handleInputChange,
}) => {
  return (
    <StyledHeroContainer>
      <h1>Fine Restaurants around the UK !</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <StyledInput
            type="text"
            value={postCode}
            onChange={handleInputChange}
          />
          <StyledButton type="submit" disabled={postCode.trim() === ""}>
            Submit
          </StyledButton>
        </div>
      </form>
    </StyledHeroContainer>
  );
};

export default HeroSection;

const StyledHeroContainer = styled.div`
  height: 250px;
  padding: 50px 15px;
`;

const StyledInput = styled.input`
  height: 15px;
  border-radius: 28px 0 0 28px;
  border: 1px black solid;
  padding: 10px 15px;
  font-size: 14px;
  outline: none;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: white;
  height: 37px;
  padding: 10px 15px;
  border-radius: 0 28px 28px 0;
  border: 1px black solid;
`;
