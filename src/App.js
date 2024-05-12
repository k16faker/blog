
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './pages/RootPage';
import ListPage from './pages/ListPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      children: [
        {
          path: '/list',
          element: <ListPage />
        }
      ]
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
