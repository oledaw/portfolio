import styled from "styled-components";
import { MdKeyboardCapslock } from "react-icons/md";
import { Link } from "react-scroll";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #e7f2f4;
  height: 70px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;
  filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  background: #e7f2f4;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(MdKeyboardCapslock)`
  transform: rotate(90deg) scale(2);
  background: #f8a88b;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 20%);
    font-size: 3rem;
    cursor: pointer;
    color: #f8a88b;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    position: absolute;
    top: 70px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #e7f2f4;
  }
`;

export const NavItem = styled.li`
  height: 60px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #f8a88b;
  }

  @media screen and (max-width: 990px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 990px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #f8a88b;
      transition: all 0.3s ease;
    }
  }
`;
