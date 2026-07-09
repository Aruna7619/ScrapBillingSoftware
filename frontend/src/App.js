import { Routes, Route } from "react-router-dom";
import CRMAdminDashboard from "./pages/CRMAdminDashboard";
import DailyRates from "./pages/DailyRates";
import Vendors from "./pages/Vendors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CRMAdminDashboard />} />
      <Route path="/daily-rates" element={<DailyRates />} />
      <Route path="/vendors" element={<Vendors />} />
    </Routes>
  );
}

export default App;