import styled from "styled-components";
import { AccountCircleOutlined, Home } from '@material-ui/icons';
import { Badge } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  /* background-color: aliceblue; */
  background: linear-gradient(0.25turn, #4ca1af,#c4e0e5);
  height: 60px;
  box-shadow: -2px 2px 8px #aaaaaa;
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
const Logo = styled.h2`
  font-weight: 300;
`;

const HomeIcon = styled.div`
  color: #005b4f;
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  margin-left: 25px;
  cursor: pointer;
  font-size: 14px;
`;

const NavBar = () => {
  const history = useHistory();

const hadnleClick = () => {
  history.push("/");
}
  return (
    <Container>
      <Wrapper>
        <Left>
          <HomeIcon>
            <Home  fontSize="large"  onClick={()=>  history.push(`/`)}/>
            </HomeIcon>
        </Left>
        <Center>
          <Logo>BACHELOR OF EDUCATION</Logo>
        </Center>
        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>ABOUT US</MenuItems>
          <MenuItems>
            <Badge badgeContent={1} color="secondary">
              <AccountCircleOutlined />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
