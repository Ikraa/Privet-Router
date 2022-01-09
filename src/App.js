import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Header from './component/Header/Header';
import AuthProvider from './contex/AuthProvider';
import Shipping from './component/Shipping/Shipping';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import React from 'react';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path= '/shipping' element={<PrivetRoute><Shipping/></PrivetRoute>} />
        </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
