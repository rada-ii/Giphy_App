import React, { useState, useRef } from "react";

function Header({ handleKeyPress }) {
  return (
    <header>
      <h1 className="logo">Giphy app</h1>
      <h2 className="title-input">Giphy Search</h2>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="Search giphy ..."
        onKeyPress={handleKeyPress}
      />
    </header>
  );
}

export default Header;
