import { styled } from "@src/styles/system-styled";
import logo from "/sport-see-full.svg";

const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "$6 $8",
  backgroundColor: "$deepblack900",
  alignItems: "center",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  zIndex: "10",
});

const Logo = styled("a", {
  height: "$16",
  width: "auto",
});

const List = styled("ul", {
  display: "flex",
  gap: "$8",
  color: "white",
  "@tablet": {
    gap: "$12",
  },
  "@laptop": {
    gap: "$24",
  },
  "@desktop": {
    gap: "$32",
  },
});

const ListLink = styled("a", {
  fontSize: "x-large",
  fontFamily: '"Roboto", sans-serif',
  fontWeight: "500",
  padding: "$2",
  "@desktop": {
    padding: "$4 $6",
    fontSize: "xx-large",
  },
});

const NavBar = () => {
  const navlinks = [
    { name: "Accueil", href: "/" },
    { name: "Profil", href: "/" },
    { name: "Réglages", href: "/" },
    { name: "Communauté", href: "/" },
  ];

  return (
    <Header>
      <Logo href="#">
        <img className="image" src={logo} alt="sport see logo" />
      </Logo>
      <nav>
        <List>
          {navlinks.map((link, i) => {
            return (
              <li key={i}>
                <ListLink href={link.href}>{link.name}</ListLink>
              </li>
            );
          })}
        </List>
      </nav>
    </Header>
  );
};

export default NavBar;
