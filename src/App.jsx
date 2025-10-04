// import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import MissionVision from './components/MissionVision';


// Blur text

// import BlurText from "./BlurText";
// import Imageslider from './Imageslider';

function App() {

//   function handleAnimationComplete() {
//   console.log("BlurText animation finished!");
// }

  return (
    <>
      <Navbar />
          <Hero/>
          <div style={{ position: 'relative', zIndex: 1200 }}>
  <MissionVision />
</div>


          <Pricing/>
      <Footer />

    </>
  );
}

export default App;
