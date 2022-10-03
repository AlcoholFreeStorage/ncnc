import styled from "@emotion/styled"

const Header =() => {
    return(
        <Container>
            <HeaderWrap>
                <HeaderLogo src='/images/icons/logo.png'></HeaderLogo>
                <BtnWrap>
                    <SignupBtn>회원가입</SignupBtn>
                    <LoginBtn>
                        <LoginImg src='/images/icons/login.png'></LoginImg>
                        <Loginp>로그인</Loginp>
                    </LoginBtn>
                </BtnWrap>
            </HeaderWrap>
        </Container>
    )
}
export default Header
const Container = styled.section`
    height: 121px;
    width: 100vw;
    background: #fff;
    padding: 0 40px;
`;
const HeaderWrap = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
`;
const HeaderLogo = styled.img`
    width: 100px;
    height: 102px;
`;
const BtnWrap = styled.div`
    display: flex;
    gap: 10px;
`;
const SignupBtn = styled.button`
    width: 160px;
    height:63px;
    border: 1px solid #CFCFCF;
    background: #fff;
    ${({ theme }) => theme.font.h2};
    color: ${({ theme }) => theme.color.grey};
    border-radius: 5px;
`;
const LoginBtn =styled.button`
    width: 160px;
    height:63px;
    background: ${({ theme }) => theme.color.primary};
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction:row;
    align-items:center;
`;
const LoginImg = styled.img`
    width: 48px;
    heigh: 48px;
`;
const Loginp = styled.p`
    ${({ theme }) => theme.font.h2};
    color: #fff;
`;