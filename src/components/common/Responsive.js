import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding: 0;
  width: 100%;
  margin: 0;  
`;

const Responsive = ({children, ...rest})=>{
  return(
    <ResponsiveBlock {...rest}>
      {children}
    </ResponsiveBlock>
  )
}

export default Responsive;