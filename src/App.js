// eslint = 잘못된 코딩 관습, 문법 잡아주는 경고
/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // let posts = '오늘의 식단';
  // let [ blogTitle, CgBlogTitle ] = useState('오늘의 식단');
  let [blogTitle, setBlogTitle] = useState([
    "오늘의 식단",
    "OOTD",
    "오늘의 공부",
  ]);

  let [inputVal, setInputVal] = useState('');

  let [likeCnt, addLikeCnt] = useState(0);

  let ChangeTitle = () => {
    let newTitle = [...blogTitle];
    newTitle[0] = "오늘의 간식";
    setBlogTitle(newTitle);
  };

  let [detailList , setDetailList ] = useState(false);

  return (
    <div className="App">
      <div className="blogMenu">
        <div className="blogTitle">세미 blog</div>
      </div>
      {

      blogTitle.map((title, i)=> {
        return (
        <div className="blogList" key={i}>
        <h4 > { blogTitle[i] }  <span
          onClick={() => {
            addLikeCnt(likeCnt + 1);
          }}
        >
          {" "}
          👍{" "}
        </span>{" "}
        {likeCnt}{" "}</h4>
        <p>00월 00일</p>
        <hr />
      </div>
        )
      })

}    

        <button
          onClick={() => {
            ChangeTitle();
          }}
        >
          {" "}
          오늘은 사실 간식을 먹었습니다.
        </button>

      <button onClick={ () => {setDetailList(!detailList)} }>상세페이지 펼치기 / 닫기</button>
      
      
      { detailList === true ? <DetailList blogTitle = { blogTitle }></DetailList> : null }
      <input onChange={ (e) => { setInputVal(e.target.value); } }></input>    


    </div>
  );
}

const DetailList = (props) => {
  return (
    <div className="detailList">
      <h2>제목 {props.blogTitle[1]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};


export default App;
