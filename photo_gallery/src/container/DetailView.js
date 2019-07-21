import React from "react";

import Button from "common/Button";

const DetailView = ({ handleClick, img: { url, id, caption } }) => (
  <div id={id}>
    <Button title={"prev"} action={"prev"} onClick={handleClick} />
    <Button title={"next"} action={"next"} onClick={handleClick} />
    <Button title={"close"} action={"close"} onClick={handleClick} />
    <div>{caption}</div>
    <img src={url} />
  </div>
);

export default DetailView;
