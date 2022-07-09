import React, { useState, useEffect, useRef } from 'react'

function ColorsHooks() {
    const [color, setColor] = useState("");
    const [user, setUser] = useState("");
    const refinput = useRef();

    useEffect(()=>{ //equivalent de componentdidmount and componentdidupdate
        console.log('ComponentDidUpdate');
        refinput.current.focus();
      },[user, setUser]);
    
  return (
    <div className='container text-center pt-5'>
      <div>
           <input ref={refinput} className="" onChange={(e) => setUser(e.target.value)} type='text' />
        {user}
      </div>
    <h1>My favorite color is {color}!</h1>
    <button className="btn btn-primary" onClick={() => setColor("blue")}>Blue</button>
    <button className="btn btn-danger" onClick={() => setColor("red")}>Red</button>
    <button className="btn btn-warning" onClick={() => setColor("warning")}>Pink</button>
    <button className="btn btn-success" onClick={() => setColor("green")}>Green</button>
   </div>
  )
}

export default ColorsHooks