import styled from "@emotion/styled"
import Header from "../component/layout/header";

export default function Info () {
    return(
        <Container>
            <Header />
        </Container>
    )
}
const Container = styled.section`
    background: ${({ theme }) => theme.color.primary};
    width: 100vw;
    height: 100vh;
`;
const InfoWrap  = styled.section`
`;