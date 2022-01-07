import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #ffffff;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-180%, 140%);
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  height: 50%;
  color: #ffffff;
`;

export const SidebarMenu = styled.ul`
  margin: 0;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  a {
    position: relative;
    font-weight: 450;
    font-size: 300%;

    color: white;
    text-decoration: none;
  }

  a:after {
    content: "";
    position: absolute;

    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
