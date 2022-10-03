import styled from "@emotion/styled";

const Header = () => {
  return (
    <Container>
      <HeaderWrap>
        <HeaderLogo src="/images/icons/logo.png"></HeaderLogo>
        <BtnWrap>
          <SignupBtn>회원가입</SignupBtn>
          <LoginBtn>
            <LoginImg src="/images/icons/login.png"></LoginImg>
            <LoginP>로그인</LoginP>
          </LoginBtn>
        </BtnWrap>
      </HeaderWrap>
    </Container>
  );
};
export default Header;
const Container = styled.section`
  background: #fff;
  padding: 0 40px;
`;
const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLogo = styled.img`
  width: 80px;
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
`;
const SignupBtn = styled.button`
  width: 120px;
  height: 40px;
  border: 1px solid #cfcfcf;
  background: #fff;
  ${({ theme }) => theme.font.p};
  color: ${({ theme }) => theme.color.grey};
  border-radius: 5px;
`;
const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  gap: 5px;
  background: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.font.p};
  color: #fff;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LoginImg = styled.img`
  width: 20px;
  height: 20px;
`;
const LoginP = styled.p`
  ${({ theme }) => theme.font.p};
`;
