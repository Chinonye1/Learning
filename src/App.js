import "./styles.css";

import Logo from './components/Logo';
import Button from './components/Button';
import Headline from './components/Headline';
import Gallery from './components/Gallery';
import CustomButton from './components/CustomButton';




function App() {
  return (

    <div className="App">
      <Logo />
      <Button />
      <CustomButton text="Verda Salon" url="https://www.verdesalon.ca/"/>
      <CustomButton text="Beauty Boutique" url= "https://www.gettingalldolledup.com/" />
      
      <Headline />
      <Gallery />


    </div>
  );
}

export default App;