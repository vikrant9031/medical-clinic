import React from 'react';
import './afterloginpatient.css';

class afterloginpatient extends React.Component{
    componentDidMount=()=>{
        var val = localStorage.getItem("status");
        if(val.length!==0){
            document.getElementById("S").style.visibility = "visible";
            document.getElementById("NS").style.visibility = "hidden";
            
        }else{
            document.getElementById("NS").style.visibility = "visible";
            document.getElementById("S").style.visibility = "hidden";
        }
    }
    render(){
        return(
            <div><marquee scrollamount="25"><p id="thank">THANK YOU FOR CHOOSING US.</p></marquee>
                 <div>
                    <p id="S">Your Appointment Has Been Fixed . Good Luck :)</p>
                    <p id="NS">YOUR APPOINTMENT HAS NOT BEEN FIXED YET. HAVE PATIENCE :)</p>
                 </div>
            </div>
        );
    }
}
export default afterloginpatient;