import React, { useState } from "react";

function CreateArticle(props) {
  // props == onCreate={handleCreate} onCancel={handleCancel}

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCreate(title, body);
  };

  const handleClick = () => {
    props.onCancel();
  };
  return (
    <div>
      <h2>Creating..</h2>
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

export default CreateArticle;
