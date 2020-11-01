import React from 'react';
import styled from 'styled-components';
import LogoDSC from '../../materials/images/dsc.png';

const HeaderContainer = styled.div`
  display: block;
  height: 65px;
  width: 100vw;
  border-bottom: 1px solid #dadce0;
  & * {
    padding: 20px;
  }
`;

const Logo = styled.img`
  height: 25px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoDSC} alt='dsc logo' />
    </HeaderContainer>
  );
}
