import './App.css';
import Navigation from "./components/Navigation/navigation";
import Info from "./components/Info/Info";
import TextBlock from "./components/TextBlock/TextBlock";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Tariffs from "./components/Tariffs/Tariffs";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
     <Navigation />
     <Info />
     <TextBlock />
     <About />
     <Team />
     <Tariffs />
     <Contacts />
     <Navigation />
     {/*<Footer />*/}
    </div>
  );
}

export default App;
