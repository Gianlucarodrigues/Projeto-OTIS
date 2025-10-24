import { Routes, Route } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css';
import Layout from "./components/Layout";
import Login from "./pages/Login/Page";
import Dashboard from "./pages/Dashboard/Page";
import ProjectPanel from "./pages/ProjectPanel/Page";
import ClientFeedback from "./pages/ClientFeedback/Page";
import ReportsKPIs from "./pages/ReportsKPIs/Page";
import Administration from "./pages/Administration/Page";
import Notifications from "./pages/Notifications/Page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/project-panel" element={<Layout><ProjectPanel /></Layout>} />
      <Route path="/client-feedback" element={<Layout><ClientFeedback /></Layout>} />
      <Route path="/reports-kpis" element={<Layout><ReportsKPIs /></Layout>} />
      <Route path="/administration" element={<Layout><Administration /></Layout>} />
      <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
    </Routes>
  );
}
