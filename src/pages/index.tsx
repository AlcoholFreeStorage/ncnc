import styled from "@emotion/styled"


export default function Home () {
    return(
        <Container>
            ncnc 프로젝트 입니다.
        </Container>
    )
}

const Container = styled.section`
    color: ${({ theme }) => theme.color.primary}; 
`;