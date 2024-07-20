import './App.css';
import React from 'react';
import { Route, BrowserRouter,Routes} from 'react-router-dom';

import HomeOne from './components/pages/Home';



function App() {

  return (
      <BrowserRouter>
          <Routes>

              <Route exact path={`${process.env.PUBLIC_URL + '/'}`} element={<HomeOne/>}/>
              

           </Routes>

      </BrowserRouter>
  );
}

export default App;

