import React from "react";
function FormArticle(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
      <form
        action='/create_process'
        method={"post"}
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(e.target.title.value, e.target.desc.value);
        }}
      >
        <p>
          <input type='text' name='title' placeholder='title'>
            {}
          </input>
        </p>
        <p>
          <textarea name='desc' placeholder='description'>
            {}
          </textarea>
        </p>
        <p>
          <input type='submit' value={"submit!"}></input>
        </p>
      </form>
    </article>
  );
}
export default FormArticle;
