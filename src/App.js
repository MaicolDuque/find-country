import Home from './pages/Home';
import { CountryContextProvider } from './context/CountryContext'
import './App.css';

function App() {
  return (
    <CountryContextProvider>
      <div className="App">
        <Home />
      </div>
    </CountryContextProvider>
  );
}

export default App;
