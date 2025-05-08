import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/template/Auth/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} />
    </Routes>
  )
}

export default App;
