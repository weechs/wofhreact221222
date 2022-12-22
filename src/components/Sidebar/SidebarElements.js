import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";
import { TbChristmasTree } from "react-icons/tb";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: grid;
  align-items: center;
  top: -100%;
  right: 0;
  transition: 0.8s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: ${({ isOpen }) => (isOpen ? "999" : "0")};
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  &:hover {
    color: var(--color-xmas);
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 80px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  text-decoration: none;
  letter-spacing: 0.4px;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: var(--color-xmas);
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.div`
  border-radius: 50px;
  height: auto;
  white-space: nowrap;
  padding: 0;
  margin: 44px 8px;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  text-decoration: none;

  & img {
    width: 60px;
  }

  a {
    &:hover {
      filter: brightness(120%);
      padding-bottom: 60px;
      border-bottom: 2px solid var(--color-xmas);
    }
  }

  /* &:hover {
    filter: brightness(110%);
    -webkit-box-shadow: 0 0 40px -80px var(--color-darkpink);
    -webkit-box-shadow: 0 0 80px 0 var(--color-pink);
    box-shadow: 0 0 80px 0 var(--color-darkpink);
  } */
`;

export const ChristmasTree = styled(TbChristmasTree)`
  margin-left: 2px;
  font-size: 40px;

  &:hover {
    color: var(--color-xmas);
  }
`;
