import React, { useCallback, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Responsive from './components/common/Responsive';
import Header from './components/Header';
import Home from './components/Home';
import SkillSet from './components/SkillSet';
import ReactPageScroller from 'react-page-scroller';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = ()=>{

  const [currentPage, setCurrentPage] = useState(0);
  const [actives, setActives] = useState({
    home: true,
    skillSet: false,
    projects: false,
    contact: false,
  });
  // 현재 scroll y 위치 저장 후, page 변경 시 header 모양 변경 코드 짜기.

  const handlePageChange =  number =>{
    setCurrentPage(number);
    console.log('현재 페이지 번호:');
    console.log(currentPage);
  };

  const handleBeforePageChange = (number) =>{
    setCurrentPage(number);
  };

  useEffect(()=>{
    switch(currentPage){
      case 0:
        setActives({
          home: true,
          skillSet: false,
          projects: false,
          contact: false,
        })
        break;

      case 1:
        setActives({
          home: false,
          skillSet: true,
          projects: false,
          contact: false,
        })
        break;
      case 2:
        setActives({
          home: false,
          skillSet: false,
          projects: true,
          contact: false,
        })
        break;
      case 3:
        setActives({
          home: false,
          skillSet: false,
          projects: false,
          contact: true,
        })
        break;
      default:
        break;
    }
  }, [currentPage]);

  return(
    <>
    {currentPage===0?<Header handleBeforePageChange={handleBeforePageChange}/>: null}
    <Responsive>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
        renderAllPagesOnFirstRender={true}
      >
        <Home />
        <Fade bottom when={actives.skillSet} collapse mountOnEnter>
          <SkillSet active={actives.skillSet} />
        </Fade>
        <Fade bottom when={actives.projects} collapse mountOnEnter>
          <Projects />
        </Fade>
        <Fade bottom when={actives.contact} collapse mountOnEnter>
          <Contact />
        </Fade>
      </ReactPageScroller>
    </Responsive>
    </>
  )
}

export default App;
