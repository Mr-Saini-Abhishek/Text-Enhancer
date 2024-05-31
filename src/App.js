import './App.css';
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Footer from './Components/Footer';

// import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';
// import { BrowserRouter,Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {

    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 4000);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundImage = 'url("https://wallpaperaccess.com/full/1767713.jpg")';

      showAlert("DARK MODE has been Enabled", "success")
    }
    else {
      setmode('light');
      document.body.style.backgroundImage = 'url("https://wallpapercave.com/dwp1x/wp9081316.jpg")';
      showAlert("LIGHT MODE has been Enabled", "success")
    }

   

  }

  return (
    <>
{/* <BrowserRouter> */}


      <Navbar mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      {/* <Routes> */}
{/* <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} />}/> */}
<TextForm/>
{/* <Route path='/about' element={<AboutUs mode={mode} />}/> */}
    
      {/* </Routes> */}
  <Footer />
{/* </BrowserRouter> */}




    </>
  );
}

export default App;
