// eslint = 잘못된 코딩 관습, 문법 잡아주는 경고
/* eslint-disable */ 

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";



function App() {

  // let posts = '오늘의 식단';
  // let [ blogTitle, CgBlogTitle ] = useState('오늘의 식단');
  let [ blogTitle, CgBlogTitle ] = useState(['오늘의 식단', 'OOTD', '오늘의 공부']);
  let [likeCnt, CgLikeCnt ]  = useState(0);

  let ChangeTitle = () => {
    let newTitle  = [...blogTitle];
      newTitle[0] = '오늘의 간식';
        CgBlogTitle( newTitle )
  }


  return (
    <div className="App">
      <div className="blogMenu">
        <div className="blogTitle">세미 blog</div>
      </div>
      <div className="blogList">
      <h4> { blogTitle[0] } <span onClick={ () => { CgLikeCnt(likeCnt+1) }}> 👍 </span> { likeCnt } </h4>
      <p>00월 00일</p>
      </div>
      <button onClick={ () => { ChangeTitle() } }> 오늘은 간식을 먹었습니다.</button>
      <div className="blogList">
      <h4> { blogTitle[1] } </h4>
      <p>00월 00일</p>
      </div>
      <div className="blogList">
      <h4> { blogTitle[2] } </h4>
      <p>00월 00일</p>
      </div>
    </div>
  );
}

export default App;
