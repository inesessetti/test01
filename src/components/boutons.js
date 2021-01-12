import React from "react";
import "./style.css"

export default function ContainedButtons({person}) {





  return (
    <div style={{textAlign:"center"}}>
      <button type="button" className="btn btn-primary" className='bstyle' onClick={person => ("Present")}>
        Present
      </button>
      <button type="button" class="btn btn-secondary" className='bstyle' onClick={person =>("Excusee")}>
        Excusé
      </button>
      <button type="button" class="btn btn-success" className='bstyle' onClick={person => ("Absent")}>
        Absent
      </button>
      
    </div>
  );
}