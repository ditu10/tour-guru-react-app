import './App.css';
import { TopNavbar } from './shared/TopNavbar';
import { Home } from './pages/Home';
import { RouterProvider } from 'react-router-dom';
import {router} from './Routes'



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
