import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";

function App(){
    return (
        <Router>
            <Routes>
                <Route path ="/" element={<MainPage />} />
                <Route path ="/projects" element={<ProjectsPage />} />
            </Routes>
        </Router>
    );
}
export default App;