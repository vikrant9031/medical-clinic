import React from 'react';
import './loginAdmin.css';
class  loginAdmin extends React.Component{

onSubmit=()=>{
  var email = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;
  fetch('http://localhost:3003/loginAdmin',
  {method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({email:email,password:password})
}).then((response)=>response.json()).then(data=>{
   if(data!==0){
    window.location.assign("http://localhost:3000/afterloginAdmin")
   }
    console.log(data);
 })
}
  render(){

    return(

      <div>
      <form class="form-horizontal">
       <img src="https://image.flaticon.com/icons/png/512/97/97895.png"/>
          <div class="form-group">
            
            <div class="col-sm-10">
              <input type="text" class="form-control" id="email" placeholder="Enter email" name="email"/>
            </div>
          </div>
          <div class="form-group">
            
            <div class="col-sm-10">          
              <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
            </div>
          </div>
          <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
            </div>
          </div>
          <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
              <input   id="btn" type="button" class="fadeIn fourth" value="Log In" onClick={this.onSubmit}/>
              
            </div>
          </div>
        </form>
      </div>
      
      
          );
      

  }


}
export default loginAdmin;