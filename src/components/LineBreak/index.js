import styled from 'styled-components';

export const LineBreak = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  width: ${(props) => `${props.width}%`};
  margin: 20px auto;
`;

LineBreak.defaultProps = {
  width: 100,
};
