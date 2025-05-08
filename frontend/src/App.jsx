import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/template/Auth/Layout";
import AuthLogin from "./page/Login";
import AuthRegister from "./page/Register";


function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
    </Routes>
  )
}

export default App;
