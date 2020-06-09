import React from 'react';
import './show.css';
class Show extends React.Component{
	constructor(){
super();
this.state={
	id:"",
	pass:""
}

	}
 componentDidMount=()=>{
this.setState({id:sessionStorage.getItem("id"),pass:sessionStorage.getItem("pass")});

 }


	render(){
return(

	<div class="alert alert-warning" id="alert">
	<p id="b">Booking Confirmed</p>
   <p style={{"color":"red"}}> Login Credentials</p> 

<p>Id: &nbsp;{this.state.id}</p>
<p>Pass: &nbsp;{this.state.pass}</p>
</div>
	);
}

}

export default Show;