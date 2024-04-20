import { FC } from "react";
import styled from "styled-components";
import heroImage from "../../assets/images/heroImage.jpg";
import { FaSearch } from "react-icons/fa";

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
      <StyledTitleWrapper>
        <StyledTitle>Find restaurants in the UK near you!</StyledTitle>
      </StyledTitleWrapper>

      <StyledForm onSubmit={handleSubmit}>
        <StyledInputWrapper>
          <FaSearch />
          <StyledInput
            type="text"
            value={postCode}
            onChange={handleInputChange}
          />
        </StyledInputWrapper>
        <StyledButton type="submit" disabled={postCode.trim() === ""}>
          Submit
        </StyledButton>
      </StyledForm>
    </StyledHeroContainer>
  );
};

export default HeroSection;

const StyledHeroContainer = styled.div`
  display: flex;
  height: 250px;
  padding: 50px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //Image attributes
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
`;

const StyledForm = styled.form`
  width: 300px;
  display: flex;
`;

const StyledInputWrapper = styled.div`
  height: 15px;
  width: 220px;
  border-radius: 28px 0 0 28px;
  border: 1px black solid;
  padding: 10px 15px;
  background-color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledInput = styled.input`
  font-size: 14px;
  outline: none;
  border: none;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: white;
  width: 80px;
  height: 37px;
  padding: 10px 15px;
  border-radius: 0 28px 28px 0;
  border: 1px black solid;
`;

const StyledTitleWrapper = styled.div`
  padding: 0px 20px 0px 30px;
`;

const StyledTitle = styled.h1`
  text-align: center;
`;
