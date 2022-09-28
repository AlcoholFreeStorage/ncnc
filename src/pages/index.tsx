import styled from "@emotion/styled"
import { keyframes } from "@emotion/react";

export default function Home () {
    return(
        <Container>
            <MainWrap>
                <MainLogo src='/images/text/mainTit.png'></MainLogo>
                <MainImgWrap>
                    <MainImg src='/images/deco/car.png'></MainImg>
                </MainImgWrap>
                <MainBtnWrap>
                    <MainStartBtn>회원가입 없이 시작하기 </MainStartBtn>
                    <MainLoginBtn>로그인하러 가기</MainLoginBtn>
                </MainBtnWrap>
            </MainWrap>
        </Container>
    )
}

const move = keyframes`
0 {
    transform: translateX(0);    
}
100% {
    transform: translateX(-600px);
}
`;

const Container = styled.section`
    background: ${({ theme }) => theme.color.primary};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const MainWrap = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const MainLogo = styled.img`
    width: 238.18px;
    height: 168.14px;
    margin-bottom: 77.88px;
`;
const MainImgWrap = styled.div`
    display: flex;
    align-items:center;
    justify-content: flex-end;
    width: 650px;
    margin-bottom: 86px;
`;
const MainImg = styled.img`
    width: 117px;
    height: 71px;
    animation: ${move} 5s linear infinite;
`;
const MainBtnWrap = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    gap: 36px;
`;
const MainStartBtn = styled.button`
    width:310px;
    height: 49px;
    ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.color.secondary};
    background: transparent;
    border: 1px solid #5196A6;
    border-radius: 6px;
`;
const MainLoginBtn = styled.button`
    width:310px;
    height: 49px;
    ${({ theme }) => theme.font.bold};
    background:${({ theme }) => theme.color.secondary};
    color: #fff;
    border: none;
    border-radius: 6px;
`;
