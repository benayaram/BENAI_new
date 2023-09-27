import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
