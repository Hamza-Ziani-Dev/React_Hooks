import React ,{useState, useEffect} from 'react'
import axios from 'axios'
function HooksUseState() {
  const [users, setUsers] = useState( //State
    []
      );
      useEffect(()=>{ //equivalent de componentdidmount and componentdidupdate
          axios.get('https://api.github.com/users').then(Response => {
            setUsers(Response.data);
          }).catch(err =>{
              console.log('erour')
          })
      },[]);
      return (
        <div className='container text-center pt-5'>
            <div className="row">
                {users.map(user => (
                  <div className="col-md-4" key={user.id}>
                   <div className="card">
                    <img className="card-img-top" src={user.avatar_url} alt=""/>
                    <div className="card-body">
                      <h4 className="card-title">{user.login}</h4>
                      <p className="card-text">
                      <a href={user.html_url} className='btn btn-success'> Show more </a>
                      <a href={user.repos_url} className='btn btn-warning'>Propostries </a>
                      </p>
                    </div>
                  </div>
                  </div>
                ))}
                </div>
                </div>
      )


}

export default HooksUseState