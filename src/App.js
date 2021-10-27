import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Responsive from './components/common/Responsive';
import Header from './components/Header';
import Home from './components/Home';
import SkillSet from './components/SkillSet';
import ReactPageScroller from 'react-page-scroller';

const App = ()=>{

  const [currentPage, setCurrentPage] = useState(0);
  // 현재 scroll y 위치 저장 후, page 변경 시 header 모양 변경 코드 짜기.

  const handlePageChange = number =>{
    setCurrentPage(number);
    console.log('현재 페이지 번호:');
    console.log(currentPage);
    // scroll y 위치 set 코드 추가하기
  }

  const handleBeforePageChange = (number) =>{
    console.log('예전 page number: ');
    console.log(number);
  }



  return(
    <>
    <Header />
    <Responsive>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Home currentPage={currentPage} />
        <Fade bottom>
          <SkillSet currentPage={currentPage}/>
        </Fade>
      </ReactPageScroller>
    </Responsive>
    </>
  )
}

export default App;
