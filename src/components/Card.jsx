import React, { useState } from "react";
import Comentarios from "../service/Coments";

const Card = ({ usuario, setcomments }) => {
  const loadComments = (id) => {
    Comentarios(id).then((data) => setcomments(data));
  };
  return (
    <div className="card">
      <h3>{usuario.name}</h3>
      <p>{usuario.email}</p>
      <div className="card-opt">
        <button onClick={() => loadComments(usuario.id)}>View</button>
      </div>
    </div>
  );
};

export default Card;
