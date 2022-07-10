import { Box, Container } from "@chakra-ui/react";
import NavBar from "@src/components/NavBar";
import SideBar from "@src/components/Sidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <Box ml="32">
        <SideBar />
        <Container as="main" maxW="container.xl">{children}</Container>
      </Box>
    </>
  );
};

export default Layout;
