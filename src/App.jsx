import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import SubmitData from "./components/SubmitData";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />

      {/* Exercise 2 */}
      <Route path="/submit" element={<SubmitData />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}