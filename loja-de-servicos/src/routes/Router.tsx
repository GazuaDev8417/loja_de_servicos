import { Routes, Route } from "react-router-dom"
import Login from "../pages/login"
import List from "../pages/list"
import Detail from "../pages/detail"
import RegistJob from "../pages/registJob"



export default function Router(){
    return(        
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/regist-job" element={<RegistJob/>}/>
        </Routes>        
    )
}