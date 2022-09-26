const Comentarios = async (idUser) => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=" + idUser
  );
  const list = await data.json();
 
  return list;
};

export default Comentarios;
