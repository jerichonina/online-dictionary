import dictionary from './dictionary.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="containter">
        <header className="App-header">
          <img src={dictionary} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="serendipity" />
        </main>
        <footer className="App-footer">
          <small>coded by Jericho Li</small>
        </footer>
      </div>
    </div>
  );
}

