import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { RoutesData } from "./Routes/routes.data"
import Home from "./screens/Home/Home"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {RoutesData.map(item => (
            <Route key={item.path} path={item.path} element={<item.element />} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App
