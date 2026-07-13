import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DailyRates from "./pages/DailyRates";
import Vendors from "./pages/Vendors";
import ScrapItems from "./pages/ScrapItems";
import Billing from "./pages/Billing";
import Reports from "./pages/Reports";
import UserManagement from "./pages/UserManagement";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Modules */}
      <Route path="/scrap-items" element={<ScrapItems />} />

      <Route path="/daily-rates" element={<DailyRates />} />

      <Route path="/vendors" element={<Vendors />} />

      <Route path="/billing" element={<Billing />} />

      <Route path="/reports" element={<Reports />} />

      <Route
        path="/user-management"
        element={<UserManagement />}
      />

      <Route path="/settings" element={<Settings />} />

    </Routes>
  );
}

export default App;