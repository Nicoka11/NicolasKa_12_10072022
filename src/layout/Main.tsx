import NavBar from "@src/components/NavBar";
import SideBar from "@src/components/SideBar";
import { styled } from "@src/styles/system-styled";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Main = styled("main", {
  marginLeft: "$32",
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

export default Layout;
