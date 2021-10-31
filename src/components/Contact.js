import React from 'react';
import styled from 'styled-components';

const ContactBlock = styled.div`
  padding: 2rem 10rem;
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  .header {
    margin: 3rem 1rem 2rem;
    font-size: 2rem;
    font-weight: 600;
    .contactTitle {
      padding-left: 2rem;
      border-left: solid 0.8rem black;
    }
  }

`;

const Contact = () =>{
  return (
    <ContactBlock>
      <div className="header">
        <span className="contactTitle">Contact</span>
      </div>

      
    </ContactBlock>
  );
}

export default Contact;
