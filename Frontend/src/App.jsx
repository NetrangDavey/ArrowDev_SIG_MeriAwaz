import react from "react"
import {BrowserRouter,Routes,Route,Navigate} from"react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
          />
        <Route
          path="/not"
          element={
            <NotFound />
          }
          />
        
      </Routes>

    </BrowserRouter>
  )
}

export default App