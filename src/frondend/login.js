
import React, {useState} from 'react'
import axaios from 'axios'
import './login.css'
function Login() {
  const [name,setname]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const [status,setstatus]=useState(false)

 const handlesubmit =async (event)=>{ event.preventDefault()
    setstatus(true)
    console.log('Submmited...');
    let resposne =await axaios.post("http://localhost:4000/admin/login",{email,password})
    console.log(resposne.data);
}

const handleemail =(event)=>  setemail(event.target.value)
const handlepassword =(event)=> setpassword(event.target.value)
    return(
        <div className='log'>
          <img className="bee" src=" https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg" alt=''></img>
          <div className='hi'>
               <form style={{display:'table-caption'}} onSubmit={handlesubmit} >
      <h3 className='qq'>LOGIN</h3>
      
      <div className="txt_field"> <label>Email</label><input type="text" placeholder=''onChange={handleemail} value={email}/></div>
      <div className="txt_field"> <label>Password</label><input type="text " placeholder=''onChange={handlepassword} value={password}/></div>

      <div >
      <button type='submit' style={{backgroundColor:'white'}}>Submit</button><a href='/dashbord'></a>
      
      </div>
    </form>
    </div>
    {status&&
  <div>
    
    <p>Email :{email}</p>
    <p>Password :{password}</p>
  </div>
}
            
        </div>
    )
    
}
export default Login


