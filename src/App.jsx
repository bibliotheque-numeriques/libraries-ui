import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./page/admin/Admin";
import Login from "./page/login/Login";
import Landing from "./page/singlepage/Landing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
