import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import Provider from './components/context/Provider';


function App() {

  return (
    <>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
