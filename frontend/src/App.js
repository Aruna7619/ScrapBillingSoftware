import { Routes, Route } from "react-router-dom";


import DailyRates from "./pages/DailyRates";
import Vendors from "./pages/Vendors";

import ScrapItems from "./pages/ScrapItems";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import Settings from "./pages/Settings";

import Billing from "./pages/Billing";

import Reports from "./pages/Reports";


function App() {
  return (
    <Routes>
     
      <Route path="/" element={<Dashboard />} />
      <Route path="/daily-rates" element={<DailyRates />} />
      <Route path="/vendors" element={<Vendors />} />

      <Route path="/scrap-items" element={<ScrapItems />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/billing" element={<Billing />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/settings" element={<Settings />} />
  
  

    </Routes>
  );
}

export default App;