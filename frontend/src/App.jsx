import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/template/Auth/Layout";
import AuthLogin from "./page/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<AuthLogin />} />
      </Route>
    </Routes>
  )
}

export default App;
