import React from "react";

const Student = ({ name, id, dispatch, isHere }) => {
  // const props = { name, id, dispatch };
  return (
    <div>
      <div
        style={{ textDecoration: isHere ? "line-through" : "none" }}
        onClick={() => {
          dispatch({ type: "mark-student", payload: { id } });
        }}
      >
        {name}
      </div>
      <button
        onClick={() => {
          dispatch({ type: "del-student", payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Student;
