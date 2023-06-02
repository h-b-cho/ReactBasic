import React, { useState } from "react";
import "./App.css";
import Article from "./component/Article";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Controls from "./component/Controls";
import FormArticle from "./component/FormArticle";

function App() {
  /* 
  state의 초기값 0번
  const _mode = useState('WELCOME');
  state의 1번
  const mode = _mode[0];
  const setMode = _mode[1]; 
  */
  const MODE_DEFAULT = "WELCOME";
  let ArticleContent = null;
  let MAX_CONTENT_ID = 3;
  const [mode, setMode] = useState(MODE_DEFAULT);
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    { id: 1, key: 0, title: "html", body: "html is..." },
    { id: 2, key: 1, title: "css", body: "css is..." },
    { id: 3, key: 2, title: "javascript", body: "javascript is..." },
  ]);
  switch (mode) {
    case "WELCOME":
      ArticleContent = <Article title='Welcome' body='Hello, Web'></Article>;
      break;
    case "READ":
      let title = null;
      let body = null;
      let key;
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].id === id) {
          key = id - 1;
          title = topics[i].title;
          body = topics[i].body;
          break;
        }
      }
      ArticleContent = <Article title={title} body={body}></Article>;
      break;
    case "CREATE":
      ArticleContent = (
        <FormArticle
          onSubmit={(_title, _desc) => {
            MAX_CONTENT_ID++;
            let _topics = topics.concat({
              id: MAX_CONTENT_ID,
              key: MAX_CONTENT_ID - 1,
              title: _title,
              body: _desc,
            });
            setTopics(_topics);
          }}
        ></FormArticle>
      );
      break;
    case "UPD":
      ArticleContent = (
        <FormArticle
          onSubmit={(_title, _desc) => {
            MAX_CONTENT_ID++;
            let _topics = topics.concat({
              id: MAX_CONTENT_ID,
              key: MAX_CONTENT_ID - 1,
              title: _title,
              body: _desc,
            });
            setTopics(_topics);
          }}
        ></FormArticle>
      );
      break;
    case "DEL":
      break;
    default:
      console.log("mode: " + mode);
      break;
  }
  return (
    <div>
      <Header
        title='REACT'
        onChangeMode={(_mode) => {
          setMode(_mode);
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_mode, _id) => {
          setMode(_mode);
          setId(_id);
        }}
      ></Nav>
      {ArticleContent}
      <Controls
        onChangeMode={(_mode) => {
          setMode(_mode);
        }}
      ></Controls>
    </div>
  );
}

export default App;
