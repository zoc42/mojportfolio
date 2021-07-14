import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Services from './components/Services';
import Exp from './components/Exp';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import FooterPage from './components/FooterPage';



function App() {

  return (
    <>
    <Navbar />
    <Header />
    <hr />
    <Main />
    <hr />
    <Services />
    <hr />
    <Portfolio />
    <hr />

    <div className="app">
    <Contact />
    </div>
    <FooterPage />
    
    </>
  );
}


export default App;
