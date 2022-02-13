import logo from "./logo.svg";
import "./App.css";



function App() {

  let posts = '오늘의 식단';
  return (
    <div className="App">
      <div className="blogMenu">
        <div className="blogTitle">세미 blog</div>
      </div>
      <h4> { posts } </h4>
    </div>
  );
}

export default App;
