import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "./Auth"
import HomePage from "./HomePage"


const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<AuthPage />}/>
            <Route path='/home' element={<HomePage />}/>
        </Routes>
    </BrowserRouter>
}

export default App