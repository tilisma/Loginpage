import React, { useState } from 'react'
import Home from '../pages/Home';

function Login() { 
  const [username,setUsername] = useState("");
  const [password,setPassword]= useState("");   
  const[valid,setValid]= useState("");
  const handleSubmit=(e) =>{  
    if (username==="abc"&& password==="123") { 
      setValid(true);
    }
  }

  return (  
     valid? <Home /> :
    <>   
      <div>
      <label htmlFor="username">Username</label> 
      <input type="text" onChange={(e)=>setUsername(e.target.value)} />   
      </div> 
      
      <div> 
      <label htmlFor="password">Password</label> 
      <input type="text" onChange={(e)=>setPassword(e.target.value)} />  
       </div>  
       <button onClick={handleSubmit}>Submit</button>
    
  </>
  )
}

export default Login