import logo from "./images/squarenwin.jpeg";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <img src={logo} className="App-logo" alt="logo" />
        <Contact />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
