import styled from "styled-components";
import burgerImage from "../../assets/images/burgerImage.png";

const LoadingScreen = () => {
  return (
    <StyledLoadingScreenContainer>
      <StyledImage src={burgerImage} alt="burger-icon" />
      <h1>Welcome...</h1>{" "}
    </StyledLoadingScreenContainer>
  );
};

export default LoadingScreen;

const StyledLoadingScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 290px;
  height: 290px;
`;
