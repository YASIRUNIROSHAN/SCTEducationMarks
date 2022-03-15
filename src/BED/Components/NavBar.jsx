import styled from "styled-components"

const Container = styled.div`
    background-color: aliceblue;
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
display: flex;
    flex: 1;
    align-items: center;
`;
const Center = styled.div`
    flex: 1;
    align-items: center;
`;
const Logo = styled.h1`
  font-weight: 300;
`;

const Right = styled.div`
display: flex;
        flex: 1;
    align-items: center;
`;

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>Left</Left>
          <Center>
          <Logo>
              Department 
          </Logo>
          </Center>
          <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default NavBar