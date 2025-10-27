import React, { useState } from "react";
import "../../styles/Notifications.css";

const notificacoesIniciais = [
  {
    id: 1,
    tipo: "warning",
    categoria: "prazo",
    titulo: "Projeto atrasado - Brasil",
    descricao: "O projeto #BR-2024-089 está 5 dias atrasado. Cliente: Shopping Iguatemi.",
    data: "2024-10-26 09:30",
    lida: false,
    prioridade: "alta"
  },
  {
    id: 2,
    tipo: "danger",
    categoria: "custo",
    titulo: "Custo acima do orçamento - México",
    descricao: "Projeto #MX-2024-045 ultrapassou 15% do orçamento previsto.",
    data: "2024-10-26 08:15",
    lida: false,
    prioridade: "urgente"
  },
  {
    id: 3,
    tipo: "success",
    categoria: "qualidade",
    titulo: "Instalação concluída - Chile",
    descricao: "Projeto #CL-2024-067 finalizado com 100% de aprovação. Cliente: Torre Central.",
    data: "2024-10-25 16:45",
    lida: false,
    prioridade: "normal"
  },
  {
    id: 4,
    tipo: "info",
    categoria: "feedback",
    titulo: "Novo feedback recebido",
    descricao: "Cliente da Argentina deixou avaliação 5 estrelas no projeto #AR-2024-123.",
    data: "2024-10-25 14:20",
    lida: true,
    prioridade: "baixa"
  },
  {
    id: 5,
    tipo: "warning",
    categoria: "prazo",
    titulo: "Prazo próximo do vencimento - Colômbia",
    descricao: "Projeto #CO-2024-056 tem prazo de entrega em 3 dias. Status: 85% concluído.",
    data: "2024-10-25 11:00",
    lida: true,
    prioridade: "alta"
  },
  {
    id: 6,
    tipo: "info",
    categoria: "sistema",
    titulo: "Atualização do sistema",
    descricao: "Nova versão do painel disponível com melhorias de performance.",
    data: "2024-10-24 10:00",
    lida: true,
    prioridade: "baixa"
  },
  {
    id: 7,
    tipo: "success",
    categoria: "qualidade",
    titulo: "Meta de qualidade atingida",
    descricao: "Região Brasil atingiu 95% de qualidade no mês de outubro.",
    data: "2024-10-24 08:30",
    lida: true,
    prioridade: "normal"
  },
  {
    id: 8,
    tipo: "danger",
    categoria: "qualidade",
    titulo: "Falha técnica reportada - México",
    descricao: "Projeto #MX-2024-032 apresentou falha em teste de segurança.",
    data: "2024-10-23 15:20",
    lida: true,
    prioridade: "urgente"
  }
];

export default function Notifications() {
  const [notificacoes, setNotificacoes] = useState(notificacoesIniciais);
  const [filtroTipo, setFiltroTipo] = useState("todas");

  const notificacoesFiltradas = filtroTipo === "todas" 
    ? notificacoes 
    : notificacoes.filter(n => n.tipo === filtroTipo);

  const naoLidas = notificacoes.filter(n => !n.lida).length;

  const marcarComoLida = (id) => {
    setNotificacoes(notificacoes.map(n => 
      n.id === id ? { ...n, lida: true } : n
    ));
  };

  const marcarTodasLidas = () => {
    setNotificacoes(notificacoes.map(n => ({ ...n, lida: true })));
  };

  const excluirNotificacao = (id) => {
    if (window.confirm("Deseja realmente excluir esta notificação?")) {
      setNotificacoes(notificacoes.filter(n => n.id !== id));
    }
  };

  const getIconeCategoria = (categoria) => {
    switch(categoria) {
      case "prazo": return "⏰";
      case "custo": return "💰";
      case "feedback": return "💬";
      case "qualidade": return "✅";
      case "sistema": return "⚙️";
      default: return "🔔";
    }
  };

  const getTipoLabel = (tipo) => {
    switch(tipo) {
      case "danger": return "Urgente";
      case "warning": return "Atenção";
      case "success": return "Sucesso";
      case "info": return "Info";
      default: return "Geral";
    }
  };

  return (
    <div className="notifications-container">
      <div className="notifications-wrapper">
        {/* Header */}
        <div className="notifications-header">
          <div className="header-left">
            <h1 className="notifications-title">
              <span className="title-icon">🔔</span>
              Notificações
            </h1>
            <p className="notifications-subtitle">
              {naoLidas > 0 ? (
                <>Você tem <strong>{naoLidas}</strong> notificação(ões) não lida(s)</>
              ) : (
                "Todas as notificações foram lidas"
              )}
            </p>
          </div>
          {naoLidas > 0 && (
            <button className="btn btn-primary" onClick={marcarTodasLidas}>
              <span className="btn-icon">✓</span>
              Marcar todas como lidas
            </button>
          )}
        </div>

        {/* Filtros */}
        <div className="filters-card">
          <span className="filter-label">Filtrar por tipo:</span>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filtroTipo === "todas" ? "active" : ""}`}
              onClick={() => setFiltroTipo("todas")}
            >
              Todas
            </button>
            <button 
              className={`filter-btn filter-danger ${filtroTipo === "danger" ? "active" : ""}`}
              onClick={() => setFiltroTipo("danger")}
            >
              <span className="filter-icon">⚠️</span>
              Urgente
            </button>
            <button 
              className={`filter-btn filter-warning ${filtroTipo === "warning" ? "active" : ""}`}
              onClick={() => setFiltroTipo("warning")}
            >
              <span className="filter-icon">⚠️</span>
              Atenção
            </button>
            <button 
              className={`filter-btn filter-success ${filtroTipo === "success" ? "active" : ""}`}
              onClick={() => setFiltroTipo("success")}
            >
              <span className="filter-icon">✅</span>
              Sucesso
            </button>
            <button 
              className={`filter-btn filter-info ${filtroTipo === "info" ? "active" : ""}`}
              onClick={() => setFiltroTipo("info")}
            >
              <span className="filter-icon">ℹ️</span>
              Info
            </button>
          </div>
        </div>

        {/* Lista de Notificações */}
        <div className="notifications-list-card">
          <div className="list-header">
            <h3 className="list-title">
              {filtroTipo === "todas" ? "Todas as Notificações" : `Notificações - ${getTipoLabel(filtroTipo)}`}
            </h3>
            <span className="count-badge">{notificacoesFiltradas.length}</span>
          </div>

          <div className="notifications-list">
            {notificacoesFiltradas.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📭</div>
                <p>Nenhuma notificação encontrada</p>
              </div>
            ) : (
              notificacoesFiltradas.map((notif) => (
                <div 
                  key={notif.id}
                  className={`notification-item ${!notif.lida ? "unread" : ""} notification-${notif.tipo}`}
                >
                  <div className="notification-icon">
                    {getIconeCategoria(notif.categoria)}
                  </div>
                  
                  <div className="notification-content">
                    <div className="notification-header-row">
                      <h4 className="notification-title">
                        {notif.titulo}
                        {!notif.lida && (
                          <span className="badge badge-new">Nova</span>
                        )}
                        <span className={`badge badge-${notif.tipo}`}>
                          {getTipoLabel(notif.tipo)}
                        </span>
                      </h4>
                    </div>
                    
                    <p className="notification-description">
                      {notif.descricao}
                    </p>
                    
                    <div className="notification-footer">
                      <span className="notification-time">
                        <span className="time-icon">⏰</span>
                        {notif.data}
                      </span>
                      <div className="notification-actions">
                        {!notif.lida && (
                          <button 
                            className="action-btn btn-mark-read"
                            onClick={() => marcarComoLida(notif.id)}
                            title="Marcar como lida"
                          >
                            <span>✓</span> Marcar como lida
                          </button>
                        )}
                        <button 
                          className="action-btn btn-delete"
                          onClick={() => excluirNotificacao(notif.id)}
                          title="Excluir"
                        >
                          <span>🗑️</span> Excluir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Stats Footer */}
        <div className="stats-footer">
          <div className="stat-item">
            <div className="stat-icon">⏰</div>
            <div className="stat-content">
              <span className="stat-label">Prazo</span>
              <span className="stat-value">{notificacoes.filter(n => n.categoria === "prazo").length}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <span className="stat-label">Custo</span>
              <span className="stat-value">{notificacoes.filter(n => n.categoria === "custo").length}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <span className="stat-label">Qualidade</span>
              <span className="stat-value">{notificacoes.filter(n => n.categoria === "qualidade").length}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">💬</div>
            <div className="stat-content">
              <span className="stat-label">Feedback</span>
              <span className="stat-value">{notificacoes.filter(n => n.categoria === "feedback").length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}