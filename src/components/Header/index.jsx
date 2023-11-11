import {
  HeaderContainer,
  HeaderNavigation,
  HeaderNavigationLink,
  LogoContainer,
  WorkTitle,
} from "./styles";
import { Logo } from "../Logo";

const NAV_LINKS = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Problema",
    to: "/problema",
  },
  {
    title: "Solução",
    to: "/solucao",
  },
  {
    title: "Sobre",
    to: "/sobre",
  },
  {
    title: "Contato",
    to: "/contato",
  },
  {
    title: "Login",
    to: "/login",
  },
  
];

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <WorkTitle>Solving O2</WorkTitle>
      </LogoContainer>

      <HeaderNavigation>
        {NAV_LINKS.map((route, index) => (
          <HeaderNavigationLink key={`route-${index}`} to={route.to}>
            {route.title}
          </HeaderNavigationLink>
        ))}
      </HeaderNavigation>
    </HeaderContainer>
  );
}
