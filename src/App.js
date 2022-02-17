// eslint = 잘못된 코딩 관습, 문법 잡아주는 경고
/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // let posts = '오늘의 식단';
  // let [ blogTitle, CgBlogTitle ] = useState('오늘의 식단');
  
  let [newTitle, addNewTitle] = useState('');
  let [blogTitle, setBlogTitle] = useState([
    "오늘의 식단",
    "OOTD",
    "오늘의 공부 정리"
  ]);

  let [detailTitleNum, setDetailTtileNum] = useState(0);

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
        <div className="blogList" key={i} onClick={ () => {setDetailTtileNum(i)} }>
        <h4> { title }  <span
          onClick={() => {
            addLikeCnt(likeCnt + 1);
          }}
        >
          {" "}
          👍{" "}
        </span>{" "}
        {likeCnt}{" "}</h4>
        <p>{'00월 00일'}</p>
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
      
      
      { detailList === true ? <DetailList blogTitle = { blogTitle } detailTitleNum = {detailTitleNum} ></DetailList> : null }

      <div className="detailComment"> 
        <h5>새 글 작성하기</h5>
        <input onChange={ (e) => { setInputVal(e.target.value) } }></input>    
        {/* <button onClick={ (e) => { setBlogTitle([inputVal, "오늘의 식단", "OOTD", "오늘의 공부"]) } }>저장</button> */}
        
        <button onClick={ (e) => { 
          let copyBlogTitle = [...blogTitle];
          copyBlogTitle.unshift(inputVal)
          setBlogTitle(copyBlogTitle) } }>저장</button>
      </div>


    </div>
  );
}

const DetailList = (props) => {
  return (
    <div className="detailList">
      <h2>제목 {props.blogTitle[props.detailTitleNum]}</h2>
      <p>날짜</p>
      <p>{'00월 00일'}</p>
    </div>
  );
};


export default App;
