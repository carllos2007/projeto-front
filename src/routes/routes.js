import { Route, Routes as RoutesDom } from "react-router-dom"
import App from "../App"



const Routes = () => {
  return (
      <RoutesDom>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
      </RoutesDom>
  )
}

export default Routes