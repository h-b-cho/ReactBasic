import React from "react";
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.tp.length; i++) {
    let t = props.tp[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode("READ", Number(e.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
export default Nav;
