import { CContainer, CRow, CCol, CCard ,CCardBody, CCardTitle, CCardText, CAlert, CProgress, CProgressBar} from '@coreui/react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, BarChart, Bar, PieChart, Pie, Cell} from 'recharts';
import "../../styles/Dashboard.css";

const dataPrazo = [
  { mes: "Jan", planejado: 100, real: 95 },
  { mes: "Fev", planejado: 100, real: 92 },
  { mes: "Mar", planejado: 100, real: 97 },
  { mes: "Abr", planejado: 100, real: 89 },
  { mes: "Mai", planejado: 100, real: 100 },
  { mes: "Jun", planejado: 100, real: 85 },
  { mes: "Jul", planejado: 100, real: 92 },
  { mes: "Ago", planejado: 100, real: 89 },
  { mes: "Set", planejado: 100, real: 88 },
  { mes: "Out", planejado: 100, real: 91 },
  { mes: "Nov", planejado: 100, real: 93 },
  { mes: "Dez", planejado: 100, real: 94 },
];

const dataCusto = [
  { mes: "Jan", custo: 38000 },
  { mes: "Fev", custo: 48000 },
  { mes: "Mar", custo: 46000 },
  { mes: "Abr", custo: 50000 },
  { mes: "Mai", custo: 47000 },
  { mes: "Jun", custo: 25000 },
  { mes: "Jul", custo: 36000 },
  { mes: "Ago", custo: 38000 },
  { mes: "Set", custo: 56000 },
  { mes: "Out", custo: 22000 },
  { mes: "Nov", custo: 21000 },
  { mes: "Dez", custo: 26000 },
];

const dataQualidade = [
  { name: "Instalações sem falhas", value: 92 },
  { name: "Com falhas", value: 8 },
];

const COLORS = ["#162447", "#e94560"];
function Dashboard() {
  return (
    <>
    <CContainer className="py-4">
      <h1 className="mb-4">Dashboard</h1>

      {/* Cards de métricas */}
      <CRow className="g-4">
        <CCol md={3}>
          <CCard className='shadow'>
            <CCardBody>   
              <CCardTitle>Prazo Médio para entrega</CCardTitle>
              <CCardText className="fs-3 fw-bold text-success">45 dias</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={3}>
          <CCard className='shadow'>
            <CCardBody>
              <CCardTitle>Custo médio por Instalação</CCardTitle>
              <CCardText className="fs-3 fw-bold text-danger">USD$ 37.750,00 ⬆</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={3}>
          <CCard className='shadow'>
            <CCardBody>
              <CCardTitle>Satisfação média cliente</CCardTitle>
              <CCardText className="fs-3 fw-bold text-info">4,2/5 - Boa</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={3}>
          <CCard className='shadow'>
            <CCardBody>
              <CCardTitle>Qualidade das entregas</CCardTitle>
              <CCardText className="fs-3 fw-bold text-success">92%</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
     <CCard className="mt-4">
      <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h4 className="mb-3 titulo">Cumprimento de Prazos (%)</h4>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={dataPrazo}>
          <CartesianGrid strokeDasharray="3 3" />   
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="planejado" stroke="#162447" name="Planejado" />
          <Line type="monotone" dataKey="real" stroke="#e94560" name="Real" />
        </LineChart>  
      </ResponsiveContainer>
    </div>
    </CCard>
     <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h4 className="mb-3 titulo">Custo Médio por Instalação (USD$)</h4>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={dataCusto}>
          <CartesianGrid strokeDasharray="3 3" /> 
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="custo" fill="#162447" name="Custo Médio (USD$)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
     <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h4 className="mb-3 titulo">Índice de Qualidade</h4>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={dataQualidade}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {dataQualidade.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </>
  );} export default Dashboard;

