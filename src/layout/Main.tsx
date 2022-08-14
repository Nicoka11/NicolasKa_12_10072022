import NavBar from "@src/components/NavBar";
import { styled } from "@src/styles/system-styled";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Box = styled("div", {
  marginLeft: "$32",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <Box>
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;