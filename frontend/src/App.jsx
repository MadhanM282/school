import { Route, Router, Routes } from 'react-router'
import './App.css'
import { Classes } from './components/Classes'
import { Login } from './components/Login'
import ButtonAppBar from './components/nav'
import { Schools } from './components/School'
function App() {

  return (
    <div className="App">
      <ButtonAppBar/>
      <Routes>
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/"} element={<Schools/>} />
        <Route path={"/class"} element={<Classes/>} />
        
      </Routes>
      {/* <Schools/> */}
    </div>
  )
}

export default App
