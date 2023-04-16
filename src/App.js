
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
// import { createContext, useState } from 'react';

// export const ThemeContext = createContext(null);
function App() {
  // const [theme, setTheme]=useState("light");

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };
  return (
    // <ThemeContext.Provider value={{theme,toggleTheme}}>
      // <div className='App' id={theme}>
      <div className=' bg-neutra App' >
     <RouterProvider router={router} ></RouterProvider>
    </div>
    // </ThemeContext.Provider>
    
  );
}

export default App;
