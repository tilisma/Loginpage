import React, { useState } from 'react'

function LoginPage() { 
  const [username,setUsername] = useState("");
  const [password,setPassword]= useState("");   
  const[valid,setValid]= useState(false);
  const handleSubmit=() =>{  
    if (username==="abc"&& password==="123") { 
      setValid(true);
    }
  }

  return (  
    
    <div>   
      <div>
      <label htmlFor="username">Username</label> 
      <input type="text" onChange={(e)=>setUsername(e.target.value)} />   
      </div> 
      
      <div> 
      <label htmlFor="password">Password</label> 
      <input type="text" onChange={(e)=>setPassword(e.target.value)} />  
       </div>  
       <button>Submit</button>
    </div> 
  
  )
}

export default LoginPage 