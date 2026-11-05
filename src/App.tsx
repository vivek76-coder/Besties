import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Module from "./components/shared/Module";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Module/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App 