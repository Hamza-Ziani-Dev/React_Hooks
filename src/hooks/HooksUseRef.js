import React,{useEffect, useRef,useState} from 'react'

function HooksUseRef() {
    const [user, setUser] = useState("");
    const refinput = useRef();
    const count = useRef(0);

    useEffect(()=>{ //equivalent de componentdidmount and componentdidupdate
        console.log('ComponentDidUpdate');
        refinput.current.focus();
        count.current = count.current +1
      },[user, setUser]);
  return (
    <div>
     <div className='container text-center pt-5'>
           <input ref={refinput} className="form-control" onChange={(e) => setUser(e.target.value)} type='text' />
        {user}<br/>
        <h2>{count.current}</h2>
      </div>
    </div>
  )
}

export default HooksUseRef