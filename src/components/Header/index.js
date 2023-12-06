import Logo from "../Logo";
import IconesHeader from "../Icones";
import OpcoesHeader from "../OpcoesHeader";
import styled from "styled-components"; 

const HeaderContainer = styled.div` 
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
