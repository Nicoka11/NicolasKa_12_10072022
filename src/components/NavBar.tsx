import { styled } from "@src/styles/system-styled";
import logo from "/sport-see-full.svg";

const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "$6 $8",
  backgroundColor: "$deepblack900",
  alignItems: "center",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
});

const Logo = styled("a", {
  marginRight: "$20",
  height: "$12",
  width: "auto",
});

const List = styled("ul", {
  display: "flex",
  gap: "$32",
  color: "white",
});

const ListLink = styled("a", {
  fontSize: "xx-large",
  padding: "$4 $6",
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
      <List>
        {navlinks.map((link, i) => {
          return (
            <li key={i}>
              <ListLink href={link.href}>{link.name}</ListLink>
            </li>
          );
        })}
      </List>
    </Header>
  );
};

export default NavBar;
