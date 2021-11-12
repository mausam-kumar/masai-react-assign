// import logo from './logo.svg';
import React from 'react';
import './App.css';
import List from './component/List'


function App() {
  const style = {
    backgroundColor:"grey",
  }
  return (
    <div className="App">

      
      <ul className="firstList" style={style}>
        <h4><List title="NameOne" src="https://rukminim1.flixcart.com/image/150/150/ktx9si80/watch/4/n/u/1-lcs-8512-lois-caron-men-original-imag75nhfyuupf54.jpeg?q=70" label="NameOne" div/></h4>
        <h4><List title="NameTwo" src="https://rukminim1.flixcart.com/image/150/150/kqse07k0/shoe/s/o/0/10-5g-725-campus-d-gry-blk-golden-original-imag4pvfdmgcytwg.jpeg?q=70" label="NameTwo" /></h4>
        <h4><List title="NameThree" src="https://rukminim1.flixcart.com/image/150/150/jhgl5e80/rice-light/7/g/d/1-usb10wwy-copper-string-led-light-10-mtr-100-led-usb-operated-original-imaf4z5g9rgww6hs.jpeg?q=70" label="NameThree" /></h4>
      </ul>
    </div>
  );
}

export default App;
