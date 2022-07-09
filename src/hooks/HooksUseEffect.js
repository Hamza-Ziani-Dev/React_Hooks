import React, {useState, useEffect} from 'react'

function HooksUseEffect() {
    const [color, setColor] = useState("");

    useEffect(()=>{ //equivalent de componentdidmount and componentdidupdate
        console.log('ComponentDidUpdate');
      },[color, setColor]);
    
  return (
    <div className='container text-center pt-5'>
    <h1>My favorite color is {color}!</h1>
    <button className="btn btn-primary" onClick={() => setColor("blue")}>Blue</button>
    <button className="btn btn-danger" onClick={() => setColor("red")}>Red</button>
    <button className="btn btn-warning" onClick={() => setColor("warning")}>Pink</button>
    <button className="btn btn-success" onClick={() => setColor("green")}>Green</button>
   </div>
  )
}

export default HooksUseEffect