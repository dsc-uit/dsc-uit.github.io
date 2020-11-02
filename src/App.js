import React from 'react';
import CountDown from './components/CountDown';
import styled from 'styled-components';
import Header from './components/Header';
import './App.css';
import { UnderLine } from './components/Typography/UnderLine';
import { SocialFooter } from './components/Footer/SocialFooter';

const Container = styled.div`
  width: 100%;
  display: block;
  padding-bottom: 20px;
`;

const Row = styled.div`
  margin: auto;
  max-width: 500px;
  padding: 0 20px;
`;

const CountDownContainer = styled.div`
  margin: auto;
  max-width: 400px;
`;

function App() {
  const time = new Date(2020, 10, 14, 0, 0, 0);
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          <h1 className='text-center'>
            <UnderLine>DSC UIT Info Session</UnderLine>
          </h1>
          <p className='text-center'>
            at <strong>University of Information Technology</strong>
          </p>
          <p className='text-center'>
            on <strong>November 14, 2020</strong>
          </p>
          <p className='text-center'>
            <UnderLine color='#fbe561'>coming soon</UnderLine>
          </p>
          <CountDownContainer>
            <CountDown scheduledTime={time} />
          </CountDownContainer>
          <SocialFooter />
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
