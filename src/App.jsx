import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

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
      <main>
        <section>
          <Hero/>
        </section>

        <section>
          <Pricing/>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
