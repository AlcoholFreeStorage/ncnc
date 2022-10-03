import styled from "@emotion/styled";

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Title>500</Title>
      <Description>잘못된 접근 입니다. 😔</Description>
      <AnimationContainer>
        <AnimationItems>
          <Images />
        </AnimationItems>
      </AnimationContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 20vh;
  background-color: #91d7f2;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 32px;
  opacity: 0.8;
  margin-bottom: 20px;
`;

const AnimationContainer = styled.div`
  width: 100%;
  height: 200px;
`;
const AnimationItems = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 200px;
  overflow: hidden;
`;
const Images = styled.div`
  @keyframes move {
    from {
      transform: translateX(30px);
    }
    to {
      transform: translateX(-330px);
    }
  }
  position: absolute;
  right: 0;
  background-image: url(/images/image_car.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  animation-duration: 10s;
  animation-name: move;
  animation-iteration-count: infinite;
  transition: 1s all linear;
`;
