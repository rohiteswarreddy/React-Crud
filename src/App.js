import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Adduser from "./axios/Adduser";
import Getuser from "./axios/Getuser";
import Updateuser from "./axios/Updateuser";
import Erroruser from "./axios/Erroruser";
// import './styles.css';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Getuser/>}/> 
    <Route path="/edit/:id" element={<Updateuser/>}/>
    <Route path="/add" element={<Adduser/>}/>
    <Route path="*" element={<Erroruser/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
