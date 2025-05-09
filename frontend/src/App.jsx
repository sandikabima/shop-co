import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/template/Auth/Layout";
import AuthLogin from "./page/auth/Login";
import AuthRegister from "./page/auth/Register";
import CustomerLayout from "./components/template/Customer/Layout";
import CheckAuth from "./components/template/CheckAuth";
import AdminLayout from "./components/template/Admin/Layout";
import NotFound from "./page/not-found";
import UnauthPage from "./page/unauth-page";
import AdminDashboard from "./page/admin/Dashboard";
import CustomerDashboard from "./page/customer/Dashboard";


function App() {

  const isAuthenticated = true
  const user = {
    role: 'customer'
  }

  return (
    <Routes>
      <Route path="/" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout />
        </CheckAuth>}>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
      <Route path="/admin" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout />
        </CheckAuth>}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
      <Route path="/customer" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><CustomerLayout />
        </CheckAuth>}>
        <Route path="dashboard" element={<CustomerDashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/unauth-page" element={<UnauthPage />} />
    </Routes>
  )
}

export default App;
