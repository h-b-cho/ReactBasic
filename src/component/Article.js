import React from "react";
// import React, {Component} from 'react';
// 함수형 컴포넌트
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
export default Article;
