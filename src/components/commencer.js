import React, {useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";

import "./style.css"


export default function Commencer( {handleclick,start,names,i }){


   return (
        <div className='com'>
            <div style={{position:'absolute',top:'15%',left:'45%',color:'#FF9966'}} >
            {! start ? <button type="button" className="btn btn-link" style={{color:"#e60057"}} onClick={() =>handleclick()} >COMMENCER</button>: <div style={{color: "white"}}><p>{names[i]}</p></div>}
              </div>
        </div>
    );


}