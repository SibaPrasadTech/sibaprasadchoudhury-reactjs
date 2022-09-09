import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
interface Props {
  message: string
}

const Announcements = (props:Props) => {
  return (
    <Container>
      {props.message}
    </Container>
  )
}

export default Announcements