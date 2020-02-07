import React from 'react';
import '../css/App.css';
import defaultSlides from '../store/defaultSlides'
import defaultProjects from '../store/defaultProjects'
import defaultProcess from '../store/defaultProcess'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Services from '../components/Services'
import Process from '../components/Process'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Slider slides={defaultSlides}/>
      <Clients/>
      <Services/>
      <Projects projects={defaultProjects}/>
      <Process processArray={defaultProcess}/>
      <Contact/>
    </div>
  );
}

export default App;
