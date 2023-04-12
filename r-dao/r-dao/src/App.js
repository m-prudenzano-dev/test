import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Project from './components/Project';
import CreateProject from './components/CreateProject';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Introduction />
      <Project />
      <CreateProject />
      <About />
    </div>
  );
}

export default App;
