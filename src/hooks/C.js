import React from 'react';
import { ProductContext } from '../App';
import B from './B'

function C() {
  return (
    <div className='container text-center'>
       <B/>
        C
        <ProductContext.Consumer>
        {
            (data) => {<p>{data}</p> 
            console.log(data)}
        }
        </ProductContext.Consumer>
    </div>
  )
}

export default C