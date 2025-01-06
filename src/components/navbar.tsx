import styled from 'styled-components';
import { TiHomeOutline } from 'react-icons/ti';
import { MdOutlineStars, MdOutlineShoppingBag } from 'react-icons/md';
import { GoGear, GoPencil } from 'react-icons/go';
import { LuPhoneCall } from 'react-icons/lu';

import Logo from '../assets/logo.png';

export default function NavBar() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <LogoImage src={Logo} alt="Rand Sohail Logo" />
        <Nav>
          <ul>
            <NavItem>
              <a href="#">
                <TiHomeOutline />
                Home
              </a>
            </NavItem>
            <NavItem>
              <a href="#expertise">
                <MdOutlineStars />
                Expertise
              </a>
            </NavItem>
            <NavItem>
              <a href="#career-history">
                <MdOutlineShoppingBag />
                Career History
              </a>
            </NavItem>
            <NavItem>
              <a href="#projects">
                <GoGear />
                Projects
              </a>
            </NavItem>
            <NavItem>
              <a href="#blog">
                <GoPencil />
                Blog
              </a>
            </NavItem>
            <NavItem>
              <a href="#contact">
                <LuPhoneCall />
                Contact
              </a>
            </NavItem>
          </ul>
        </Nav>
      </InnerContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 25px 0px;
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
`;

const InnerContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: var(--primary-color);
    font-weight: 800;
    font-size: 20px;
  }
`;

const LogoImage = styled.img`
  width: 50px;
`;
const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }
  li {
    margin-right: 20px;
  }
  @media (max-width: 650px) {
    ul {
      justify-content: space-around;
      width: 100%;
    }
  }
`;

const NavItem = styled.li`
  a {
    display: flex;
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    &:hover {
      color: var(--primary-color);
    }
  }
  svg {
    padding-right: 5px;
    width: 20px;
    height: 20px;
  }
  @media (max-width: 650px) {
    margin-right: 0;

    a {
      flex-direction: column;
      align-items: center;
      font-size: 0;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
