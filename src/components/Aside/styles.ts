import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-right: 1px solid ${props => props.theme.colors.tertiary};
`;
