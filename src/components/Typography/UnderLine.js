import styled from 'styled-components';

export const UnderLine = styled.span`
  background-image: ${(props) =>
    `linear-gradient(120deg, ${props.color} 0%, ${props.color} 100%)`};
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
`;

UnderLine.defaultProps = {
  color: '#84fab0',
};
