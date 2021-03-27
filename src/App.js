import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";
import Definition from "./Definition";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="header-logo img-fluid" alt="logo" />
          <h1>
            <i>Define It!</i> 
          </h1>
          <h2>Your friendly neighborhood dictionary app</h2>
        </header>
        <hr></hr>
        <main>
          <Dictionary />
          <hr></hr>
          <Definition />
          <hr></hr>
        </main>
        <footer className="text-center">Hand-coded by <a class="footer-link" href="https://www.annemarierobson.com/">Anne Marie Robson</a>.
        View <i class="fab fa-github"></i> <a class="footer-link" href="https://github.com/amstoddard84/react-dictionary-app">GitHub repository</a></footer>
      </div>
    </div>
  );
}
