import React from 'react';
import Introduction from './Introduction';
import Projects from './Project';
import CreateProject from './CreateProject';
import About from './About';

function Main() {
  return (
    <main>
      <Introduction />
      <Projects />
      <CreateProject />
      <About />
    </main>
  );
}

export default Main;
