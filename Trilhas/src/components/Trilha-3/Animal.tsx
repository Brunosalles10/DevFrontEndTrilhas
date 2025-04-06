import { useParams } from "react-router-dom";

function Animal() {
  const { name } = useParams<{ name: string }>();
  return (
    <div>
      <p>PARÂMETRO RECEBIDO NA URL EM HOME </p>
      <h1>O animal é {name}</h1>
    </div>
  );
}

export default Animal;
