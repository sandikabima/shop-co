import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/template/Auth/Layout";
import AuthLogin from "./page/Login";
import AuthRegister from "./page/Register";
import CustomerLayout from "./components/template/Customer/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
      <Route path="/customer" element={<CustomerLayout />}>
      </Route>
    </Routes>
  )
}

export default App;
