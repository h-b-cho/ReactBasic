import React, { useState } from "react";
import "./App.css";
import Article from "./component/Article";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Controls from "./component/Controls";
import FormArticle from "./component/FormArticle";

function App() {
  const MODE_DEFAULT = "WELCOME";
  const [mode, setMode] = useState(MODE_DEFAULT);
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    { id: 1, key: 0, title: "html", body: "html is..." },
    { id: 2, key: 1, title: "css", body: "css is..." },
    { id: 3, key: 2, title: "javascript", body: "javascript is..." },
  ]);

  const handleCreate = (_title, _desc) => {
    const newId = topics.length + 1;
    const newTopic = {
      id: newId,
      key: newId - 1,
      title: _title,
      body: _desc,
    };
    setTopics((prevTopics) => [...prevTopics, newTopic]);
    setMode(MODE_DEFAULT);
  };

  const handleUpdate = (_title, _desc) => {
    const targetTopic = topics.map((topic) => {
      if (topic.id === id) {
        return { ...topic, title: _title, body: _desc };
      }
      return topic;
    });
    setTopics(targetTopic);
    setMode(MODE_DEFAULT);
  };

  const handleDelete = () => {
    const targetTopic = topics.filter((topic) => topic.id !== id);
    setTopics(targetTopic);
    setId(-1);
    setMode(MODE_DEFAULT);
  };

  let ArticleContent;
  let title;
  let body;
  let key;

  switch (mode) {
    case "WELCOME":
      ArticleContent = <Article title='Welcome' body='Hello, Web' />;
      break;
    case "READ":
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].id === id) {
          key = id - 1;
          title = topics[i].title;
          body = topics[i].body;
          break;
        }
      }
      ArticleContent = <Article title={title} body={body} />;
      break;
    case "CREATE":
      title = "CREATE";
      body = "creating...";
      ArticleContent = <FormArticle title={title} body={body} onSubmit={handleCreate} />;
      break;
    case "UPD":
      title = "UPDATE";
      body = "updating...";
      ArticleContent = <FormArticle title={title} body={body} onSubmit={handleUpdate} />;
      break;
    case "DEL":
      title = "DELETE";
      body = "deleting...";
      ArticleContent = <Article title={title} body={body} />;
      break;
    default:
      console.log("this mode is error: " + mode);
      break;
  }

  return (
    <div>
      <Header
        title='REACT'
        onChangeMode={(_mode) => {
          setMode(_mode);
        }}
      />
      <Nav
        tp={topics}
        onChangeMode={(_mode, _id) => {
          setMode(_mode);
          setId(_id);
        }}
      />
      {ArticleContent}
      <Controls
        onChangeMode={(_mode) => {
          setMode(_mode);
        }}
        onDel={handleDelete}
      />
    </div>
  );
}

export default App;
