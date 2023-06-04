import React, { useState } from "react";

function UpdateArticle(props) {
  const [title, setTitle] = useState(props.article.title);
  const [body, setbody] = useState(props.article.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdate(props.article.id, title, body);
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
          <textarea value={body} onChange={(e) => setbody(e.target.value)} />
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
