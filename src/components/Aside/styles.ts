import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-right: 1px solid ${props => props.theme.colors.tertiary};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 10px 40px 10px;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.colors.tertiary};
  font-size: 24px;
`;

export const IconDiv = styled.div`
  padding-right: 5px;
`;

export const MenuContainer = styled.nav`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.info};
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 40px;
  transition: all 0.3s;
  display: flex;
  align-items: center;

  > svg {
    font-size: 2rem;
    color: ${props => props.theme.colors.tertiary};
    padding-right: 10px;
  }

  &:hover {
    color: ${props => props.theme.colors.tertiary};
    text-decoration: underline;
    opacity: 0.8;
    > svg {
      color: ${props => props.theme.colors.info};
      transform: scale(1.2);
    }
  }
`;
