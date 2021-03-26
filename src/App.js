import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="header-logo img-fluid" alt="logo" />
          <h1>
            <i>Define It!</i> App
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Hand-coded by Anne Marie Robson</footer>
      </div>
    </div>
  );
}
