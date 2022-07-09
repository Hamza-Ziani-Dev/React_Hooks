import React,{useState, useEffect} from 'react'

function CounterHooks() {
    const [counter,setCounter] = useState(0) //State
    const [title,setTitle] = useState('localhost ') //State

    const counterPlus = () => {
        setCounter(counter + 1);
    }
useEffect(() =>{
 console.log('Use Effect')
 document.title = title + counter;

},[title, counter]);
    return <div className='container text-center pt-5'>
         <button className="btn btn-primary" 
                 onClick={counterPlus}>+
         </button>
           <h1> {counter}</h1>
         <button className="btn btn-primary" 
                   onClick={() => setCounter(counter -1)}>-
         </button>
         <div className='mt-4'>
         <button className="btn btn-danger" 
                   onClick={() => setTitle('new site')}>Changer Title
         </button>
         </div>
           </div>;
}

export default CounterHooks