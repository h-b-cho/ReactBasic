import React, { useState } from "react";

function CreateArticle(props) {
  // props == { onCreate, onCancel }

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCreate(title, body);
    // 그리고 setTitle(""); 와 setBody("");를 해준다. 입력하고 있던 폼 즉 const title과 const body에 대한 초기화 같은데, 이걸 안 해줘도 모든 경우 다 깨끗하게 초기화되길래 지웠다.
  };

  const handleClick = () => {
    props.onCancel();
    setTitle("");
    setBody("");
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
