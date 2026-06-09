import WhyWhistle from "./components/WhyWhistle/WhyWhistle";
import HappySmilers from "./components/HappySmilers/HappySmilers";
import FAQ from "./components/FAQ/FAQ";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ClinicCTA from "./components/ClinicCTA/ClinicCTA";
import Results from "./components/Results/Result";
import Footer from "./components/Footer/Footer";
import Steps from "./components/Steps/Steps";
import DoctorLed from "./components/DoctorLed/DoctorLed";
import Difference from "./components/Difference/Difference";
import BottomCTA from "./components/BottomCTA/BottomCTA";
import Pricing from "./components/Pricing/Pricing";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ClinicCTA />
      <Pricing />
      <Results />
      <WhyWhistle /> 
      <Difference/>
      <Steps/>
      <DoctorLed/>
      <HappySmilers />
      <FAQ />
      
      <Footer />
      <BottomCTA />
    </div>
  );
}

export default App;