import styled from "styled-components";

export const Container = styled.div`
  > select {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.tertiary};
    padding: 7px 10px;
    border-radius: 5px;
    margin-left: 7px;
    font-size: 0.9rem;
  }
`;
