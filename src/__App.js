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

  const handleCreate = (updated_title, updated_body) => {
    setArticles([
      ...articles,
      { id: articles.length + 1, title: updated_title, body: updated_body },
    ]);
    setMode(MODE_DEFAULT);
  };

  const handleUpdate = (id, updated_title, updated_body) => {
    const updated_articles = articles.map((item) => {
      if (item.id == id) {
        return { ...item, title: updated_title, body: updated_body };
      } else {
        return item; // fail to find target
      }
    });
    setArticles(updated_articles);
    setMode(MODE_DEFAULT);
    setTargetArticle(null);
  };

  const handleDelete = (id) => {};

  const handleEdit = (id) => {
    const targeted = articles.find((item) => item.id == id);
    setTargetArticle(targeted); // const targetArticle = targeted;
    setMode(MODE_UPDATE); // const mode = MODE_UPDATE;
  };

  const handleCancel = () => {};

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
