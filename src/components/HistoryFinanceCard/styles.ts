import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${props => props.theme.colors.primary};

  list-style: none;

  border-radius: 5px;

  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  transition: all 0.3s;
  cursor: pointer;

  > div {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    > span {
      font-weight: 500;
    }
  }

  &:hover {
    box-shadow: 0 0 0.5em ${props => props.theme.colors.tertiary};
    transform: scale(1.01);
  }
`;

export const Tag = styled.div<ITagProps>`
  position: absolute;
  left: 3px;

  width: 6px;
  height: 60%;
  border-radius: 5px;
  background-color: ${props => props.color};
`;
