import React from "react";
function Controls(props) {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    props.onDel();
  };
  const style = {
    display: "flex",
    justifyContent: "space-around",
  };

  return (
    <ul style={style}>
      <li>
        <a
          href='/create'
          onClick={function(e) {
            e.preventDefault();
            props.onChangeMode("CREATE");
          }}
        >
          create
        </a>
      </li>
      <li>
        <a
          href='/update'
          onClick={function(e) {
            e.preventDefault();
            props.onChangeMode("UPD");
          }}
        >
          update
        </a>
      </li>
      <li>
        <input type='button' value='delete' onClick={handleDeleteClick}></input>
      </li>
    </ul>
  );
}

export default Controls;
