import React, {useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Commencer from'./components/commencer.js'; 
import Lowerbutton from './components/lower.js';
import Button from'./components/boutons.js'; 


export default function App() {
  const [ i ,seti]=useState(0)
    const names=['sonia A','amine B','ines C','ashwek D', 'aziz E']
    const [start,setStart]=useState(false)
    const [present,setpresent]=useState([])
  const [absent,setabsent]=useState([])
  const [tous,settous]=useState([])
  const[filtrer,setFiltrer]=useState("absent")
 
    function affectation(person) {
      if(person==="present"){
        setpresent([...present,...[names[i]]])
      }
      else if (person==="absent"){
        setabsent([...absent,...[names[i]]])
      }
      settous([...tous,...[names[i]]])
      return(
        seti(i+1)
      )
    }
  
  return (
    
    
    <div style={{backgroundColor:'black',height:'750px',width:'100%'}}>
      {absent.map(elt=><h1>{elt}</h1>)}
     { names[i]? <Commencer i={i} names={names} start={start} handleclick={() =>setStart(true) }></Commencer>:null}     
      <div onClick={() =>seti(i+1)}><Button start={start} val={affectation}></Button></div>
    <Lowerbutton setFiltrer={setFiltrer}></Lowerbutton>
      <div>
      {filtrer==="tous" ? tous.map(p=><div style={{color:"white"}}>{p} </div>):null}
      {filtrer==="present" ? present.map(p=><div style={{color:"white"}}>{p}</div>):null}
      {filtrer==="absent" ? absent.map(p=><div style={{color:"white"}}>{p}</div>):null}
      </div>
     


    </div>
    

  );
}