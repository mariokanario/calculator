import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import Provider from './components/context/Provider';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    if (window.location.pathname != "/" && window.location.pathname != "/PdfView") {
      window.location.href = "/"
   }
  }, []);
  

  return (
    <>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
