import './App.css';
import Navigation from "./components/Navigation/navigation";
import Info from "./components/Info/Info";
import TextBlock from "./components/TextBlock/TextBlock";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Tariffs from "./components/Tariffs/Tariffs";
import Contacts from "./components/Contacts/Contacts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cabinet from "./pages/cabinet/Cabinet";

function MainContent() {
    return (
        <>
            <Navigation />
            <Info />
            <TextBlock />
            <About />
            <Team />
            <Tariffs />
            <Contacts />
            <Navigation />
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={<MainContent />} />
                    <Route path='/cabinet' element={<Cabinet />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;