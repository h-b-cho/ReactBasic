import React, { useState } from "react";

function UpdateArticle(props) {
  // props == { article, onUpdate, onCancel }

  const [title, setTitle] = useState(props.article.title);
  const [body, setBody] = useState(props.article.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdate(props.article.id, title, body); // 아까props로받은아이디, 갱신된title, 갱신된body
  };

  const handleClick = () => {
    props.onCancel();
  };

  return (
    <div>
      <h2>Updating..</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <div>
          <button type='submit'>Done</button>
          <button type='button' onClick={handleClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateArticle;
