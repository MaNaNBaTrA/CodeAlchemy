import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Project from './components/Project';
import Projects from './components/Projects';
import Service from './components/Service';
import Services from './components/Services';
import Slider from './components/Slider';
import Work from './components/Work';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Slider/>
      <Service/>
      <Services/>
      <Work/>
      <Project  />
      <Projects/>
      <Footer/>
    </>
  )

}

export default App;
