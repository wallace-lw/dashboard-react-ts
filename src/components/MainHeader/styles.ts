import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.tertiary};
`;
