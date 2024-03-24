import './App.css';
import { TopNavbar } from './shared/TopNavbar';
import { Home } from './pages/Home';



function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Home/>
    </div>
  );
}

export default App;
