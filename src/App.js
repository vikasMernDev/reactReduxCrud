
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import compstore from './Redux/Store';
import Company from './Components/Company';

function App() {
  return (
    <Provider store={compstore}>
    <BrowserRouter>

      <Routes>
       <Route path='/' element={<Company/>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer position='top-right'></ToastContainer>
    </Provider>
  );
}

export default App;