import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import Router from "./routes/Router"


const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: .5s;
}

body{
  background-color: #151626;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  color: whitesmoke;
}

.icon{
  cursor: pointer;
  font-size: 2rem;
}  
`



function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
