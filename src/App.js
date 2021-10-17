import React from 'react';
import Responsive from './components/common/Responsive';
import Header from './components/Header';
import Home from './components/Home';

const App = ()=>{
  return(
    <>
    <Header />
    <Responsive>
      <Home />
    </Responsive>
    </>
  )
}

export default App;
