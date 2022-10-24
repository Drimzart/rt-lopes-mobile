import Header from "./components/Header"
import Validity from "./components/Validity"
import QRCode from "./components/QRCode"
import CopyButtom from "./components/CopyButtom"
import QRCodeReady from "./components/QRCodeReady"
import axios from "axios"
import { useEffect, useState } from "react"
/*  
  <QRCodeReady />
*/

export default function App() {
 const url = "http://45.6.99.155/pix/gera"

 const [code, setCode] = useState([])


 useEffect(()=>{
  axios.post(url, {
    "registro": "NF111",
    "pix": "12211775675",
    "value": 0.01
  }).then((response)=> {
   setCode(response.data.gera
    );
  }).catch((error) => {
    console.log(error)})

 })
  
  return (
    <div className="max-w-sm h-screen bg-bgwhite font-inter">
      <Header/>
      <Validity/>
      <QRCode />
      <CopyButtom/>    
      
    
    </div>
  )
}


