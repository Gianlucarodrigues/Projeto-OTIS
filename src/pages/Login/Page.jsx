import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Exemplo de validação simples
    if (email === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    alert(`Logado como ${email}`); // Aqui você chamaria sua API real
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h1 className="login-title">Bem-vindo</h1>
        <p className="login-subtitle">Faça login para acessar o painel</p>

        {error && <div className="login-error">{error}</div>}

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="input-icon">
              <FaUser />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <div className="login-footer">
          <a href="#">Esqueceu a senha?</a> | <a href="#">Registrar</a>
        </div>
      </div>
    </div>
  );
}
