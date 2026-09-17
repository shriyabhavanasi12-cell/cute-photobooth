
import './App.css';
import React from "react";
import PhotoBooth from "./components/photobooth";

const logoSrc="/assets/logo/jiggleduo-logo.png";


function App() {
  return (
    <div className="App" style={{
      minHeight:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>

<div style={{
  width: "100%",
  maxWidth:1200,
  display:"flex",
alignItems:"center",
gap:12,
padding:"20px 32px"

}}>



<img src={logoSrc} alt="JiggleDuo Logo" style={{width: 50}}/>

<h1 style={{
  fontFamily:"Cantika Cute",
  color:"#8c5b4a",
  margin:0
}}>
JiggleDuo Photobooth 

  
</h1>
      </div>
    </div>
  );
}

export default App;
