import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;

  grid-area: CT;

  color: ${props => props.theme.colors.white};

  background-color: ${props => props.theme.colors.secundary};

  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: ${props => props.theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
  }
`;
