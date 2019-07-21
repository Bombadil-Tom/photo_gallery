import React from "react";

const Picture = ({ url, caption, onClick, id }) => (
  <div onClick={onClick}>
    <div>{caption}</div>
    <img src={url} alt={caption} data-id={id} />
  </div>
);

export default Picture;
