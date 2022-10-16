import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
import ManageOrder from "./pages/dashboard/manageOrder";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
