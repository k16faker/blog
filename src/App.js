
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './pages/RootPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />
    }
  ]);


  return (
    <div className="App">
    </div>
  );
}

export default App;
