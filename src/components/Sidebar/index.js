import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
  ChristmasTree
} from "../Sidebar/SidebarElements";
import images from "../../images";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarBtnWrap>
          <SidebarRoute>
            <a
              href="https://www.wheelofhealth.co.uk/login"
              alt="Login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.wofhLogoWheel} alt="Associate Login" />
            </a>
          </SidebarRoute>
          <SidebarRoute>
            <a
              href="https://qunote3.net"
              alt="Login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.qunoteLogin} alt="Login" />
            </a>
          </SidebarRoute>
        </SidebarBtnWrap>
        <SidebarMenu>
          <SidebarLink
            style={{ fontSize: "16px", fontWeight: "600" }}
            to="/enquire"
            onClick={toggleHome}
            spy="true"
            smooth="true"
            offset={-70}
            duration={400}
          >
            <ChristmasTree />
            Festive Hours
          </SidebarLink>
          <SidebarLink
            to="/discover"
            onClick={toggleHome}
            spy="true"
            smooth="true"
            offset={-70}
            duration={400}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to="/partnership"
            onClick={toggleHome}
            spy="true"
            smooth="true"
            offset={-70}
            duration={400}
          >
            Partnership
          </SidebarLink>
          <SidebarLink
            to="/enquire"
            onClick={toggleHome}
            spy="true"
            smooth="true"
            offset={-70}
            duration={400}
          >
            Enquiry
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
