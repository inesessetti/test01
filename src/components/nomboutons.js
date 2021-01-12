import React, {useState} from 'react';
import './style.css';

 export default function commmence(){
      return(
          <div>
      <div id="buttons"  >
             <button type="button" onClick={()=>state("Present")} className="btn btn-success">Present</button>
             <button type="button" onClick={()=>state("Excusé")}  className="btn btn-warning">Excusé</button>
             <button type="button" onClick={()=>state("Abscent")} className="btn btn-danger">Abscent</button>
         </div>
     
     
     <div>
        <Button onClick={()=>affectation("Tous")}>Tous</Button>
        <Button onClick={()=>affectation("Abscent")}>Abscent</Button>
        <Button onClick={()=>affectation("Present")} >Present</Button>
      
    </div>
    </div>
     
    )
}
