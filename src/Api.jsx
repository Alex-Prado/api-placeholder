import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Users from "./service/User";

const Api = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    Userlist();
  }, []);

  const Userlist = () => {
    Users().then((data) => setUsuarios(data));
  };

 

  return (
    <div className="container">
      {usuarios.map((usuario) => (
        <Card
          key={usuario.id}
          usuario={usuario}
          setcomments={setcomments}
        />
      ))}
    </div>
  );
};

export default Api;
