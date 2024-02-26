import { BrowserRouter, Routes , Route} from "react-router-dom"
import Form from "./component/Form"
import Home from "./Home"
import Form2 from "./component/Form2"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}></Route>
        <Route path="/form2" element={<Form2/>}></Route>
        <Route path="/home" element={<Home/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App