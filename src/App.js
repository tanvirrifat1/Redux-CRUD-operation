import { RouterProvider } from 'react-router-dom';
import './App.css';
import Index, { router } from './Routes/Index';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
