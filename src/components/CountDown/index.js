import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function diff(from, to) {
  let seconds = Math.floor((to.getTime() - from.getTime()) / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  const days = Math.floor(hours / 24);
  hours = hours % 24;
  return [days, hours, minutes, seconds];
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Box = styled.div`
  display: inline-block;
  background: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  min-width: 50px;
  font-size: 30px;
`;

const BoxDescription = styled.span`
  display: block;
  font-size: 15px;
`;

export default function CountDown({ scheduledTime }) {
  const [d, dd] = useState(null);
  const [h, hh] = useState(null);
  const [m, mm] = useState(null);
  const [s, ss] = useState(null);

  const updateCountDown = (scheduledTime) => {
    const [d, h, m, s] = diff(new Date(Date.now()), scheduledTime);
    dd(d);
    hh(h);
    mm(m);
    ss(s);
  };

  useEffect(() => {
    updateCountDown(scheduledTime);
    setInterval(() => updateCountDown(scheduledTime), 1000);
  }, [scheduledTime]);

  return (
    <Container>
      <Box>
        {d}
        <BoxDescription>days</BoxDescription>
      </Box>
      <Box>
        {h}
        <BoxDescription>hours</BoxDescription>
      </Box>
      <Box>
        {m}
        <BoxDescription>minutes</BoxDescription>
      </Box>
      <Box>
        {s}
        <BoxDescription>seconds</BoxDescription>
      </Box>
    </Container>
  );
}
