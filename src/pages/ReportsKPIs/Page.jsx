import React, { useState } from "react";
import "./reports-kpis.css";

/* ========= DADOS FIXOS ========= */
const DATA = {
  mensal: {
    titulo: "Dashboard — Mês Atual",
    grupos: [
      {
        depto: "1) Vendas",
        kpis: [
          { label: "Faturamento do mês", unidade: "R$", meta: 10000000, atual: 8300000, dir: "up" },
          { label: "Taxa de conversão", unidade: "%",  meta: 25,       atual: 21,      dir: "up" },
        ],
      },
      {
        depto: "2) Engenharia",
        kpis: [
          { label: "Projetos liberados",       unidade: "un",  meta: 45, atual: 38, dir: "up" },
          { label: "Prazo médio de aprovação", unidade: "dias", meta: 7,  atual: 9,  dir: "down" },
        ],
      },
      {
        depto: "3) Compras",
        kpis: [
          { label: "Lead time médio",          unidade: "dias", meta: 15, atual: 17, dir: "down" },
          { label: "Economia vs orçamento",    unidade: "%",    meta: 5,  atual: 3.8, dir: "up" },
        ],
      },
      {
        depto: "4) Produção",
        kpis: [
          { label: "Elevadores produzidos",     unidade: "un", meta: 40, atual: 34, dir: "up" },
          { label: "Entrega no prazo (On-time)",unidade: "%",  meta: 95, atual: 90, dir: "up" },
        ],
      },
      {
        depto: "5) Serviços de instalação",
        kpis: [
          { label: "Instalações concluídas",    unidade: "un",  meta: 35, atual: 29, dir: "up" },
          { label: "Cumprimento de prazo",      unidade: "%",   meta: 92, atual: 86, dir: "up" },
        ],
      },
    ],
  },
  anual: {
    titulo: "Dashboard — Ano (YTD)",
    grupos: [
      {
        depto: "1) Vendas",
        kpis: [
          { label: "Faturamento acumulado",   unidade: "R$", meta: 120000000, atual: 98000000, dir: "up" },
          { label: "Ticket médio por pedido", unidade: "R$", meta: 220000,    atual: 205000,   dir: "up" },
        ],
      },
      {
        depto: "2) Engenharia",
        kpis: [
          { label: "Projetos liberados", unidade: "un", meta: 520, atual: 470, dir: "up" },
          { label: "Índice de retrabalho", unidade: "%", meta: 3, atual: 4.2, dir: "down" },
        ],
      },
      {
        depto: "3) Compras",
        kpis: [
          { label: "SLA de entrega no prazo", unidade: "%",  meta: 95,  atual: 91,      dir: "up" },
          { label: "Savings acumulado",       unidade: "R$", meta: 3000000, atual: 2200000, dir: "up" },
        ],
      },
      {
        depto: "4) Produção",
        kpis: [
          { label: "OEE (eficiência global)", unidade: "%", meta: 85, atual: 79, dir: "up" },
          { label: "Refugo/Sucata",           unidade: "%", meta: 2,  atual: 2.8, dir: "down" },
        ],
      },
      {
        depto: "5) Serviços de instalação",
        kpis: [
          { label: "Prazo médio de instalação", unidade: "dias", meta: 25, atual: 28, dir: "down" },
          { label: "NPS (satisfação do cliente)", unidade: "pts", meta: 70, atual: 66, dir: "up" },
        ],
      },
    ],
  },
};

/* ========= HELPERS ENXUTOS ========= */
const clamp = (v, min = 0, max = 1) => Math.max(min, Math.min(max, v));

function progresso(k) {
  if (!k.meta) return 0;
  if (k.dir === "down") return k.atual <= k.meta ? 1 : clamp(k.meta / k.atual);
  return clamp(k.atual / k.meta);
}

function statusClass(k) {
  const p = progresso(k);
  if (p >= 1) return "ok";
  if (p >= 0.8) return "warn";
  return "danger";
}

function fmtValor(v, u) {
  if (u === "R$") {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);
  }
  if (u === "%") return `${v}%`;
  if (u === "dias") return `${v} dia${v === 1 ? "" : "s"}`;
  if (u === "un") return `${v} un`;
  if (u === "pts") return `${v} pts`;
  return String(v);
}

/* ========= COMPONENTE ESPERADO PELA PASTA ========= */
export default function ReportsKPIs() {
  const [aba, setAba] = useState("mensal");
  const board = aba === "mensal" ? DATA.mensal : DATA.anual;

  return (
    <div className="rk-page">
      <header className="rk-top">
        <h1>Relatórios e KPIs</h1>
        <div className="rk-tabs">
          <button className={`rk-tab ${aba === "mensal" ? "is-active" : ""}`} onClick={() => setAba("mensal")}>
            Mensal
          </button>
          <button className={`rk-tab ${aba === "anual" ? "is-active" : ""}`} onClick={() => setAba("anual")}>
            Anual (YTD)
          </button>
        </div>
      </header>

      <h2 className="rk-board-title">{board.titulo}</h2>

      {board.grupos.map((g) => (
        <section key={g.depto} className="rk-sec">
          <h3 className="rk-sec-title">{g.depto}</h3>
          <div className="rk-grid">
            {g.kpis.map((k) => {
              const p = progresso(k);
              const st = statusClass(k); // ok | warn | danger
              return (
                <article key={`${g.depto}-${k.label}`} className={`rk-card ${st}`}>
                  <div className="rk-head">
                    <span className="rk-label">{k.label}</span>
                    <span className={`rk-badge ${st}`}>{st === "ok" ? "No verde" : st === "warn" ? "Atenção" : "Crítico"}</span>
                  </div>

                  <div className="rk-vals">
                    <div>
                      <strong className="rk-val">{fmtValor(k.atual, k.unidade)}</strong>
                      <div className="rk-sub">Atual</div>
                    </div>
                    <div>
                      <strong className="rk-val">{fmtValor(k.meta, k.unidade)}</strong>
                      <div className="rk-sub">Meta</div>
                    </div>
                  </div>

                  <div className="rk-bar-outer">
                    <div className="rk-bar-inner" style={{ width: `${Math.round(p * 100)}%` }} />
                  </div>

                  <div className="rk-foot">
                    <span className="rk-dir">Meta {k.dir === "down" ? "↓ menor" : "↑ maior"}</span>
                    <span className="rk-pct">{Math.round(p * 100)}%</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

