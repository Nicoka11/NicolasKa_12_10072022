import NavBar from "@src/components/NavBar";
import SideBar from "@src/components/SideBar";
import PropTypes from "prop-types";
import { styled } from "@src/styles/system-styled";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Main = styled("main", {
  marginLeft: "$32",
  height: "$full",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div>
        <SideBar />
        <Main>{children}</Main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
