import Home from "./pages/home/home"
import Login from "./pages/login/login"
import List from "./pages/list/list"
import Single from "./pages/single/single"
import New from "./pages/new/New"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource"
import "./style/dark.scss"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login />} />
            <Route path='users'>
              <Route index element={<List/>}/>
              <Route path=":user" element={<Single/>}/>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path='products'>
              <Route index element={<List/>}/>
              <Route path=":user" element={<Single/>}/>
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

          </Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
