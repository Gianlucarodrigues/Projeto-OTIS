import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaTachometerAlt, 
  FaProjectDiagram, 
  FaComments, 
  FaChartBar, 
  FaCogs, 
  FaBell, 
  FaSignOutAlt 
} from "react-icons/fa";
import "../styles/Layout.css";

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { href: "/project-panel", label: "Project Panel", icon: <FaProjectDiagram /> },
    { href: "/client-feedback", label: "Client Feedback", icon: <FaComments /> },
    { href: "/reports-kpis", label: "Reports & KPIs", icon: <FaChartBar /> },
    { href: "/administration", label: "Administration", icon: <FaCogs /> },
    { href: "/notifications", label: "Notifications", icon: <FaBell /> },
    { href: "/", label: "Sair", icon: <FaSignOutAlt /> } // último item
  ];

  return (
    <nav className="sidebar-nav">
      <h2 className="logo">Painel</h2>
      <ul>
        {links.map(link => (
          <li key={link.href} className={pathname === link.href ? "active" : ""}>
            <Link to={link.href}>
              <span className="icon">{link.icon}</span>
              <span className="label">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
