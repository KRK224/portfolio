import React from 'react';
import Fade from 'react-reveal/Fade';
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
      <Fade bottom>
        <SkillSet id="skillSet"/>
      </Fade>
    </Responsive>
    </>
  )
}

export default App;
