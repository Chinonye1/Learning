import "./styles.css";

import Logo from './components/Logo';

import Headline from './components/Headline';
import Gallery from './components/Gallery';
import CustomButton from './components/CustomButton';




function App() {
  return (

    <div className="App">
      <Logo />
     
      <div className="btn-flex">
      <CustomButton text="Verda Salon" url="https://www.verdesalon.ca/"/>
      <CustomButton text="Beauty Boutique" url= "https://www.gettingalldolledup.com/" />
      <CustomButton text="Lavish Salon" url="https://lavishsalon.ca/" />
      </div>
      <Headline />
      <Gallery />


    </div>
  );
}

export default App;