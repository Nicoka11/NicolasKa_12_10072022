import { Button, Flex, List, ListItem, Image } from "@chakra-ui/react";
import logo from "/sportsee-logo.svg";

const NavBar = () => {
  const navlinks = [
    { name: "Accueil", href: "/" },
    { name: "Profil", href: "/" },
    { name: "Réglages", href: "/" },
    { name: "Communauté", href: "/" },
  ];

  return (
    <Flex
      direction="row"
      w="full"
      justifyContent="space-between"
      paddingX="8"
      paddingY="6"
      bg="deepblack.900"
      align="center"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Image src={logo} alt="sportsee logo" mr="20" />
      <List display="flex" gap="32" color="white">
        {navlinks.map((link, i) => {
          return (
            <ListItem key={i}>
              <Button
                as="a"
                variant="unstyled"
                href={link.href}
                fontSize="2xl"
                paddingX="6"
                paddingY="4"
              >
                {link.name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

export default NavBar;
