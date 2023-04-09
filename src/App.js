
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import { createContext } from 'react';

export const ThemeContext = createContext(null);
function App() {
  return (
    <ThemeContext.Provider>
      <div  >
     <RouterProvider router={router} ></RouterProvider>
    </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
