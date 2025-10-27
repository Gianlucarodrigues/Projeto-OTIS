import React, { useState } from "react";
import "../../styles/Administration.css";

const usuariosIniciais = [
  { id: 1, nome: "Carlos Silva", email: "carlos.silva@otis.com", role: "Admin", pais: "Brasil", status: "Ativo" },
  { id: 2, nome: "Maria Rodriguez", email: "maria.r@otis.com", role: "Gerente", pais: "Argentina", status: "Ativo" },
  { id: 3, nome: "Juan Perez", email: "juan.p@otis.com", role: "Técnico", pais: "Chile", status: "Ativo" },
  { id: 4, nome: "Ana Costa", email: "ana.costa@otis.com", role: "Gerente", pais: "Brasil", status: "Inativo" },
  { id: 5, nome: "Diego Martinez", email: "diego.m@otis.com", role: "Técnico", pais: "México", status: "Ativo" }
];

const paisesIniciais = [
  { id: 1, nome: "Brasil", codigo: "BR", projetos: 145, usuarios: 34, status: "Ativo" },
  { id: 2, nome: "Argentina", codigo: "AR", projetos: 89, usuarios: 21, status: "Ativo" },
  { id: 3, nome: "Chile", codigo: "CL", projetos: 67, usuarios: 15, status: "Ativo" },
  { id: 4, nome: "México", codigo: "MX", projetos: 112, usuarios: 28, status: "Ativo" },
  { id: 5, nome: "Colômbia", codigo: "CO", projetos: 78, usuarios: 19, status: "Ativo" }
];

export default function Administration() {
  const [usuarios, setUsuarios] = useState(usuariosIniciais);
  const [paises] = useState(paisesIniciais);
  const [activeTab, setActiveTab] = useState(1);
  const [modalUsuario, setModalUsuario] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formUsuario, setFormUsuario] = useState({
    nome: "",
    email: "",
    role: "Técnico",
    pais: "Brasil"
  });

  const handleAdicionarUsuario = () => {
    if (!formUsuario.nome || !formUsuario.email) {
      alert("Preencha todos os campos");
      return;
    }
    const novoUsuario = {
      id: usuarios.length + 1,
      ...formUsuario,
      status: "Ativo"
    };
    setUsuarios([...usuarios, novoUsuario]);
    setModalUsuario(false);
    setFormUsuario({ nome: "", email: "", role: "Técnico", pais: "Brasil" });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleExcluirUsuario = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      setUsuarios(usuarios.filter(u => u.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setUsuarios(usuarios.map(u => 
      u.id === id ? { ...u, status: u.status === "Ativo" ? "Inativo" : "Ativo" } : u
    ));
  };

  return (
    <div className="admin-container">
      <div className="admin-wrapper">
        <div className="admin-header">
          <h1 className="admin-title">⚙️ Administração</h1>
          <p className="admin-subtitle">Gerenciamento de usuários, permissões e configurações do sistema</p>
        </div>

        {showSuccess && (
          <div className="alert alert-success">
            ✓ Operação realizada com sucesso!
          </div>
        )}

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-label">Total de Usuários</div>
            <div className="stat-value">{usuarios.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-label">Usuários Ativos</div>
            <div className="stat-value">{usuarios.filter(u => u.status === "Ativo").length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌎</div>
            <div className="stat-label">Países Ativos</div>
            <div className="stat-value">{paises.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏢</div>
            <div className="stat-label">Projetos Totais</div>
            <div className="stat-value">{paises.reduce((acc, p) => acc + p.projetos, 0)}</div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => setActiveTab(1)}
              >
                👥 Usuários
              </button>
              <button 
                className={`tab ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => setActiveTab(2)}
              >
                🌎 Países/Regiões
              </button>
              <button 
                className={`tab ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => setActiveTab(3)}
              >
                ⚙️ Configurações
              </button>
            </div>
          </div>

          <div className="card-body">
            {activeTab === 1 && (
              <div>
                <div className="section-header">
                  <h3>Gerenciamento de Usuários</h3>
                  <button className="btn btn-primary" onClick={() => setModalUsuario(true)}>
                    + Novo Usuário
                  </button>
                </div>

                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Função</th>
                        <th>País</th>
                        <th>Status</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                          <td className="font-bold">{usuario.nome}</td>
                          <td>{usuario.email}</td>
                          <td>
                            <span className={`badge badge-${usuario.role.toLowerCase()}`}>
                              {usuario.role}
                            </span>
                          </td>
                          <td>{usuario.pais}</td>
                          <td>
                            <span 
                              className={`badge badge-${usuario.status === "Ativo" ? "success" : "secondary"}`}
                              onClick={() => handleToggleStatus(usuario.id)}
                              title="Clique para alterar status"
                            >
                              {usuario.status}
                            </span>
                          </td>
                          <td>
                            <button className="btn-icon btn-info" title="Editar">✏️</button>
                            <button 
                              className="btn-icon btn-danger"
                              onClick={() => handleExcluirUsuario(usuario.id)}
                              title="Excluir"
                            >
                              🗑️
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <h3 className="section-title">Gerenciamento de Países/Regiões</h3>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>País</th>
                        <th>Código</th>
                        <th>Projetos Ativos</th>
                        <th>Usuários</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paises.map((pais) => (
                        <tr key={pais.id}>
                          <td className="font-bold">{pais.nome}</td>
                          <td>
                            <span className="badge badge-primary">{pais.codigo}</span>
                          </td>
                          <td>{pais.projetos}</td>
                          <td>{pais.usuarios}</td>
                          <td>
                            <span className="badge badge-success">{pais.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div>
                <h3 className="section-title">Configurações do Sistema</h3>
                <div className="settings-grid">
                  <div className="settings-card">
                    <div className="settings-card-header">
                      <strong>Configurações Gerais</strong>
                    </div>
                    <div className="settings-card-body">
                      <div className="form-group">
                        <label className="form-label">Nome da Empresa</label>
                        <input className="form-input" defaultValue="OTIS Elevadores" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email de Suporte</label>
                        <input className="form-input" defaultValue="suporte@otis.com" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Fuso Horário</label>
                        <select className="form-select">
                          <option>America/Sao_Paulo (GMT-3)</option>
                          <option>America/Argentina/Buenos_Aires (GMT-3)</option>
                          <option>America/Santiago (GMT-3)</option>
                        </select>
                      </div>
                      <button className="btn btn-primary">Salvar Configurações</button>
                    </div>
                  </div>

                  <div className="settings-card">
                    <div className="settings-card-header">
                      <strong>Configurações de Notificações</strong>
                    </div>
                    <div className="settings-card-body">
                      <div className="form-group">
                        <label className="form-label">Alertas de Prazo (dias antes)</label>
                        <input className="form-input" type="number" defaultValue="3" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Variação de Custo Crítica (%)</label>
                        <input className="form-input" type="number" defaultValue="15" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Meta de Qualidade Mínima (%)</label>
                        <input className="form-input" type="number" defaultValue="90" />
                      </div>
                      <button className="btn btn-primary">Salvar Configurações</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {modalUsuario && (
        <div className="modal-overlay" onClick={() => setModalUsuario(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Adicionar Novo Usuário</h2>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Nome Completo</label>
                <input 
                  className="form-input"
                  value={formUsuario.nome}
                  onChange={(e) => setFormUsuario({...formUsuario, nome: e.target.value})}
                  placeholder="Ex: João Silva"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  className="form-input"
                  type="email"
                  value={formUsuario.email}
                  onChange={(e) => setFormUsuario({...formUsuario, email: e.target.value})}
                  placeholder="joao.silva@otis.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Função</label>
                <select 
                  className="form-select"
                  value={formUsuario.role}
                  onChange={(e) => setFormUsuario({...formUsuario, role: e.target.value})}
                >
                  <option value="Admin">Admin</option>
                  <option value="Gerente">Gerente</option>
                  <option value="Técnico">Técnico</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">País</label>
                <select 
                  className="form-select"
                  value={formUsuario.pais}
                  onChange={(e) => setFormUsuario({...formUsuario, pais: e.target.value})}
                >
                  <option value="Brasil">Brasil</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Chile">Chile</option>
                  <option value="México">México</option>
                  <option value="Colômbia">Colômbia</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setModalUsuario(false)}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={handleAdicionarUsuario}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}