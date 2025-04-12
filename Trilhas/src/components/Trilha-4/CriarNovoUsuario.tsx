import React, { useState } from "react";

const CadastroUsuario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const cadastrarUsuario = async () => {
    setMensagem("");
    setCarregando(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: nome, email }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao cadastrar o usuário");
      }

      const data = await response.json();
      setMensagem(`Usuário cadastrado com sucesso! ID: ${data.id}`);
      setNome("");
      setEmail("");
    } catch (error: any) {
      setMensagem(error.message || "Erro desconhecido");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-md bg-white">
      <h1 className="text-xl font-bold mb-4">Cadastrar Novo Usuário</h1>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Digite o nome"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Digite o e-mail"
        />
      </div>

      <button
        onClick={cadastrarUsuario}
        disabled={carregando}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
      >
        {carregando ? "Enviando..." : "Cadastrar"}
      </button>

      {mensagem && (
        <p
          className={`mt-4 ${
            mensagem.startsWith("Usuário") ? "text-green-600" : "text-red-500"
          }`}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
};

export default CadastroUsuario;
