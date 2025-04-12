import React, { useState } from "react";

const BuscarUsuario: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [usuario, setUsuario] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const buscarUsuario = async () => {
    setCarregando(true);
    setUsuario(null);
    setErro("");

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }

      const data = await response.json();
      setUsuario({ name: data.name, email: data.email });
    } catch (error: any) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-md bg-white">
      <h1 className="text-xl font-bold mb-4">Buscar Usuário</h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="number"
          placeholder="Digite o ID do usuário"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <button
          onClick={buscarUsuario}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Buscar
        </button>
      </div>

      {carregando && <p>Carregando...</p>}

      {usuario && (
        <div className="bg-gray-100 p-4 rounded">
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}

      {erro && <p className="text-red-500 mt-2">{erro}</p>}
    </div>
  );
};

export default BuscarUsuario;
