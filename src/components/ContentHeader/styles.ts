import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 25px;
`;

export const TitleContainer = styled.div`
  > h1 {
    color: ${props => props.theme.colors.white};
    font-size: 1.6rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 8px;
      top: 32px;
      left: 0;
      width: 40px;
      background: ${props => props.theme.colors.warning};
    }
  }
`;

export const Controllers = styled.div``;
