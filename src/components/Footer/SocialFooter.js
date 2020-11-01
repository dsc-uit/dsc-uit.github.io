import React from 'react';
import styled from 'styled-components';
import { LineBreak } from '../LineBreak';

const FooterContainer = styled.div`
  border: 0;
  padding-top: 10px;
  font-size: 16px;
`;

const Social = styled.div`
  display: block;
`;

const Contact = styled.div`
  display: block;
  margin-top: 10px;
`;

const TextLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  margin-top: 10px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0;
  background-position: 0 88%;
  transition: background-size 0.1s ease-in;
  &:hover {
    background-size: 100% 0.3em;
  }
`;

export function SocialFooter() {
  return (
    <FooterContainer className='text-center'>
      <LineBreak width={70} />
      <Social>
        follow us on{' '}
        <TextLink href='https://www.facebook.com/dsc.uit/' target='_blank'>
          @facebook
        </TextLink>{' '}
        or{' '}
        <TextLink href='https://github.com/dsc-uit' target='_blank'>
          @github
        </TextLink>
      </Social>
      <Contact>
        contact us via{' '}
        <TextLink href='mailto:dsc.hcmuit@gmail.com'>
          dsc.hcmuit@gmail.com
        </TextLink>
      </Contact>
    </FooterContainer>
  );
}
