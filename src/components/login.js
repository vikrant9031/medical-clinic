import React from 'react';
import './login.css';
class LoginPatient extends React.Component{
  
  
  onSubmit=()=>{
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pwd').value;
    console.log(name+" "+pass);

    fetch('http://localhost:3003/loginpatient',{
      method:'post',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({name:name,pass:pass})
    }).then(response=>response.json()).then(data=>{
        console.log(data);
       if(data){
        localStorage.setItem("status",data);
        window.location.assign('http://localhost:3000/afterloginpatient');
       }
   })
}
   render(){
  return(

<div id="loginHead">
<form class="form-horizontal">
 <img src="data:image/png;base64,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"/>
    <div class="form-group">
      
      <div class="col-sm-10">
        <input type="text" class="form-control" id="name" placeholder="Enter name" name="name"/>
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
        <input  id="btn" type="button" class="fadeIn fourth" value="Log In" onClick={this.onSubmit}/>
        
      </div>
    </div>
  </form>
</div>
);
  }

}

export default LoginPatient;