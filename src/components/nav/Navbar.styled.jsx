import styled from 'styled-components';
import { Flex } from '../globalstyles/Flex.styled';
export const Nav = styled(Flex)`
padding:1rem 1.5rem;
background-color: ${({theme}) => theme.colors.navbarBgColor};
`;



export const Brand =styled(Link)`

padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
  }


`


export const Menu = styled(Flex)`
@media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction:column;
    width: 100%;
    max-height: ${({isOpen})=>(isOpen ? "400px" : "0")};
    overflow: hidden;
  }
`;




