import React, { useState } from "react";
import "../../styles/Feedback.css";

// Exemplo de feedbacks
const mockFeedbacks = [
  { id: 1, name: "João", email: "joao@email.com", rating: 5, message: "Excelente serviço!" },
  { id: 2, name: "Maria", email: "maria@email.com", rating: 4, message: "Tudo certo, mas poderia melhorar o prazo." },
  { id: 3, name: "Pedro", email: "pedro@email.com", rating: 3, message: "Ok, mas esperava mais atenção." },
  { id: 4, name: "Ana", email: "ana@email.com", rating: 5, message: "Perfeito, recomendo!" },
];

export default function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState(mockFeedbacks);
  const [filter, setFilter] = useState("");

  const filtered = feedbacks.filter(
    f =>
      f.name.toLowerCase().includes(filter.toLowerCase()) ||
      f.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="admin-container">
      <h1 className="admin-title">Dashboard de Feedbacks</h1>
      <input
        type="text"
        placeholder="Filtrar por nome ou e-mail"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="admin-filter"
      />
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Avaliação</th>
              <th>Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((f) => (
              <tr key={f.id}>
                <td>{f.name}</td>
                <td>{f.email}</td>
                <td>
                  {"★".repeat(f.rating)}
                  {"☆".repeat(5 - f.rating)}
                </td>
                <td>{f.message}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "15px", color: "#aaa" }}>
                  Nenhum feedback encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
