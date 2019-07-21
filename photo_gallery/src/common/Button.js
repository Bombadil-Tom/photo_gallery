import React from "react";

const Button = ({ title, onClick, action }) => (
  <button type="button" onClick={onClick} data-action={action}>
    {title}
  </button>
);

export default Button;
