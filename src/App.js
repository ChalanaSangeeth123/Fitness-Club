import './App.css';
import Footer from './componenets/Footer/Footer';
import Hero from './componenets/Hero/Hero';
import Join from './componenets/Join/Join';
import Plans from './componenets/Plans/Plans';
import Programs from './componenets/Programs/Programs';
import Reasons from './componenets/Reasons/Reasons';
import Testimonials from './componenets/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
