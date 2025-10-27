import "../../styles/LinhaDoTempo.css"; 

function LinhaDoTempoElevador() {
  return (
     <> 
          <h1>Processo de Instalação do Elevador</h1>
      <p className="intro">
        Nesta apresentação, iremos mostrar uma linha do tempo com cada etapa planejada pela nossa empresa para a instalação do elevador, destacando todos os passos e as datas que marcaram o avanço do projeto.
      </p>

      <div className="timeline" id="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Janeiro, 2025</div>
          <div className="timeline-text">
            Planejamento e Projeto. Fizemos primeiramente uma análise estrutural do edifício, depois definimos qual tipo de elevador é o mais adequado, em seguida fizemos o projeto técnico com plantas, cálculos e especificações de segurança e por último buscamos a aprovação dos órgãos competentes.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Junho, 2025</div>
          <div className="timeline-text">
            Preparação da Estrutura. Construímos o poço onde o elevador se movimenta, depois fizemos a execução da casa de máquinas, em seguida a adequação elétrica e por último instalação de guias de suporte.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Janeiro, 2026</div>
          <div className="timeline-text">
            Instalação dos componentes. Nessa etapa a colocação da cabine e contrapeso, a instalação do motor e sistema de tração, a montagem das portas, os painéis de controle e botoeiras, a iluminação e ventilação da cabine serão feitas.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Agosto, 2026</div>
          <div className="timeline-text">
            Testes e Configuração. Nessa etapa será feito testes de cargas, ajustes de sensores e freios, a configuração eletrônica com a programação de andares, chamadas e temporizações e por último a inspeção técnica realizada pelo engenheiro responsável.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Janeiro, 2027</div>
          <div className="timeline-text">
            Certificação e Liberação. Nessa etapa teremos a emissão do ART assinado pelo engenheiro responsável, a vistoria final, liberação para uso e por último o treinamento do usuário/manutenção.
          </div>
        </div>
      </div>
    </>
  );
}

export default LinhaDoTempoElevador;