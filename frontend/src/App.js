import { Routes, Route } from "react-router-dom";
import CRMAdminDashboard from "./pages/CRMAdminDashboard";
import ScrapItems from "./pages/ScrapItems";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<CRMAdminDashboard />} />
      <Route path="/scrap-items" element={<ScrapItems />} />
      <Route path="/dashboard" element={<Dashboard />} />
  
    </Routes>
  );
}

export default App;