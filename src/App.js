import HooksUseState from './hooks/HooksUseState'
import HooksUseEffect from './hooks/HooksUseEffect'
import HooksUseRef from './hooks/HooksUseRef'
import CounterHooks from './components/CounterHooks'
//import A from './hooks/A'
import C from './hooks/C'
import { createContext, useReducer, useState } from 'react'
export const ProductContext = createContext();
const iniState = {
  users :[]
}
const reducer = (state, action) => {
  switch(action.type){
    case 'Add_User':
      return {users : [...state.users, 'Hamza']}
    case 'Remove_Users':
      return {users : []}
    default :
    return state
  }
}
//action
//reducer
//dispatch()
function App() {
  const [state, dispatch] = useReducer(reducer, iniState)
  const [product] = useState('labtop');
  return (
    <ProductContext.Provider value={product}>
      <div className="App">
      <h2>UseReducer</h2>
      {state.users.lenth ? state.users.map(user => <div> {user} </div>) : 'There Are Not User'}
      <button onClick={() => dispatch({type:'Add_User'})}>Add</button>
      <button onClick={() => dispatch({type:'Remove_Users'})}>Remove</button>
      <C/>
      <HooksUseRef/>
      <HooksUseEffect/>
      <CounterHooks/>
      <HooksUseState/>
    </div>
    </ProductContext.Provider>
  );
}

export default App;
