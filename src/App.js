import React from 'react';
import Responsive from './components/common/Responsive';
import Header from './components/Header';
import Home from './components/Home';
import SkillSet from './components/SkillSet';

const App = ()=>{
  return(
    <>
    <Header />
    <Responsive>
      <Home />
      <SkillSet />
    </Responsive>
    </>
  )
}

export default App;
