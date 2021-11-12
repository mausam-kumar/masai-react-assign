// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Mobile from './component/Mobile'
import List from './component/List'
import Button from './component/Button'

function App() {
  const style = {
    backgroundColor:"grey",
  }
  var array1= ["Android", "iOS", "Blackberry" , "Windows Phone"];
  var array2 = ["Samsung","HTC","Apple","Micromax"]

  var titleArray = ["join Us","Settings","Login","Contact US","Search","Help","HOme","Download"]
  var colorArray = ["blue","cyan","yellow","red","green","voilet","pink","crimson"]
  return (
    <div className="App">

      
      {/* <ul className="firstList" style={style}>
        <h4><List title="NameOne" src="https://rukminim1.flixcart.com/image/150/150/ktx9si80/watch/4/n/u/1-lcs-8512-lois-caron-men-original-imag75nhfyuupf54.jpeg?q=70" label="NameOne" div/></h4>
        <h4><List title="NameTwo" src="https://rukminim1.flixcart.com/image/150/150/kqse07k0/shoe/s/o/0/10-5g-725-campus-d-gry-blk-golden-original-imag4pvfdmgcytwg.jpeg?q=70" label="NameTwo" /></h4>
        <h4><List title="NameThree" src="https://rukminim1.flixcart.com/image/150/150/jhgl5e80/rice-light/7/g/d/1-usb10wwy-copper-string-led-light-10-mtr-100-led-usb-operated-original-imaf4z5g9rgww6hs.jpeg?q=70" label="NameThree" /></h4>
      </ul> */}

      {/* <Mobile title="Mobile Operating System" array ={array1} />
      <Mobile title="Mobile Manufacturer" array ={array2} /> */}

      

      {
        titleArray.map(function(ele,i){
          return (
            <Button title={ele} color={colorArray[i]} />
          )
        })
      }


    </div>
  );
}

export default App;
