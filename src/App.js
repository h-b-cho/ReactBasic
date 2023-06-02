import React, { useState } from "react";
import CreateArticle from "./component/CreateArticle";
import UpdateArticle from "./component/UpdateArticle";

function App() {
  const MODE_DEFAULT = "DEFAULT";
  const MODE_CREATE = "CREATE";
  const MODE_UPDATE = "UPDATE";
  const [articles, setArticles] = useState([
    { id: 1, title: "article 1", body: "This is the first article." },
    { id: 2, title: "article 2", body: "This is the second article." },
  ]);
  const [mode, setMode] = useState(MODE_DEFAULT);
  const [targetArticle, setTargetArticle] = useState(null);

  const handleEdit = (id) => {
    const selected = articles.find((item) => item.id === id);
    if (selected) {
      setTargetArticle(selected);
      setMode(MODE_UPDATE);
    }
  };
  /* handleEdit()에서 handleUpdate()를 거치는 게시글 수정 루틴:
    Edit 버튼 클릭 -> onClick={() => handleEdit(article.id)} 
    -> handleEdit()에서 setTargetArticle(id로찾은클릭된게시글) 
    -> handleEdit()에서 setMode(MODE_UPDATE) 
    -> {mode === MODE_UPDATE && 로 인해 function App() returns <UpdateArticle>
      <UpdateArticle>는 props로 { article, onUpdate, onCancel }를 받게끔 되어 있고, 
      이는 각각 article={targetArticle} onUpdate={나중에호출될함수} onCancel={나중에호출될함수}이란 값을 가진 채 function UpdateArticle(props)로 들어간다.
      와중 <UpdateArticle>은, const [title, setTitle] = useState(props.article.title);, const [body, setBody] = useState(props.article.body);을 통해
      props로 받은 article의 내용들을 인풋들의 초기값들로서 가진다. 즉 최초 return 시 const title = props.article.title; const body = props.article.body; 으로 선언하는 것이다.
    -> onChange={(e) => setTitle(e.target.value)}, onChange={(e) => setBody(e.target.value)}로 인풋되는 입력값을 onChange 이벤트일 떄마다 setStating한다.
    -> submit 버튼 클릭 -> <form onSubmit={handleSubmit}>
    -> handleSubmit()의 props.onUpdate(props.article.id, title, body);로 넘긴 인자들을 <UpdateArticle>의 프로퍼티인 onUpdate이 받음.
    -> onUpdate={드디어호출된handleUpdate}의 handleUpdate()가 이 인자들을 고대로 받음. 즉, handleUpdate(props.article.id, title, body)이라 이해 가능.
    -> handleUpdate()가 setStating한다. -> function App() returns 각종setState들로갱신된내용.
  */

  const handleUpdate = (id, updated_title, updated_body) => {
    // 깊은 복사 : 원본 객체와 복사본 객체는 완전히 별개의 객체! 원본과의 참조 관계를 끊기 위해 사용하고 있다.
    // 1. map()
    const updated_articles = articles.map(
      (item) => (item.id === id ? { ...item, title: updated_title, body: updated_body } : item)
      // const updated_articles = 전체 게시글 중 해당 게시글의 id와 일치하는 게시글을 1. 발견 시, 기존의 객체 -> 에 대한 깊은 복사체에 -> "인자로 받아왔던 title과 body 값들을 pushback해, 해당 속성에 대해 다시 새로운 값으로 갱신된 값으로서 재선언되게 한다." 그러면 첫번째 선언됐던 즉 기존의 값이 덮어씌워진다. 그렇게 기존 객체가 새로운 객체로 대체. 2. 못 발견 시, 기존의 객체 그대로 반환. 그냥 지나치는 거임.
      // 그리고 참고로 어이 없지만 ㅠ 아래 내용은 실화다.
      // const handleUpdate = (id, title, body) => 일 때, 속성이름과 인자의 이름이 같아서 그런가? --> { ...item, title, body }
      // const handleUpdate = (id, updated_title, updated_body) => 일 때, --> { ...item, title: updated_title, body: updated_body }
    );
    // 2. reduce()
    // const updated_articles = articles.reduce((acc, item) => {
    //   return item.id === id ? [...acc, { ...item, title, body }] : [...acc, item];
    // }, []);
    setArticles(updated_articles);
    setMode(MODE_DEFAULT);
    setTargetArticle(null); // const targetArticle = null; 특정 게시글을 선택하지 않은 상태로 초기화.
  };

  const handleCreate = (updated_title, updated_body) => {
    setArticles([
      ...articles,
      { id: articles.length + 1, title: updated_title, body: updated_body },
    ]);
    setMode(MODE_DEFAULT);
  };
  // const handleCreate = (title, body) --> 일 때,
  //   setArticles([ ...articles, { id: articles.length + 1, title, body } ]);

  const handleDelete = (id) => {
    const updated_articles = articles.filter((item) => item.id !== id); // 전체 게시글 중 해당 게시글의 id와 일치하지 않는 게시글만 필터링하여 새로운 배열을 생성한다.
    setArticles(updated_articles);
    setMode(MODE_DEFAULT);
    setTargetArticle(null);
  };

  const handleCancel = () => {
    setTargetArticle(null);
    setMode(MODE_DEFAULT);
  };

  return (
    <div>
      <h1 onClick={() => setMode(MODE_DEFAULT)}>REACT</h1>
      {mode === MODE_DEFAULT && (
        <div>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
                <button onClick={() => handleEdit(article.id)}>Edit</button>
                <button onClick={() => handleDelete(article.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={() => setMode(MODE_CREATE)}>Create</button>
        </div>
      )}
      {mode === MODE_CREATE && <CreateArticle onCreate={handleCreate} onCancel={handleCancel} />}
      {mode === MODE_UPDATE && (
        <UpdateArticle article={targetArticle} onUpdate={handleUpdate} onCancel={handleCancel} />
      )}
    </div>
  );
}

export default App;
