import React from 'react';
class Comp extends React.Component{
  constructor(props){
    super(props);
    this.state={
     conf:0,
     recovered:0,
     deaths:0,
     sconf:0,
     srecovered:0,
     sdeaths:0,
     country:''
    }
  }
 
  onSub=(event)=>{
     this.setState({country:event.target.value});
     localStorage.setItem("country",JSON.stringify(event.target.value));
     
   
  }
 onC=()=>{
  fetch('https://pomber.github.io/covid19/timeseries.json')
  .then(response=>response.json())
  .then(data=>{ var a = data.India[data.India.length-1].confirmed;
                var b = data.India[data.India.length-1].deaths;
                var c = data.India[data.India.length-1].recovered;
            
                this.setState({conf:a});
                this.setState({deaths:b});
                this.setState({recovered:c}); 

                var loc = JSON.parse(localStorage.getItem("country"));
                console.log(typeof(loc));
                var sconf = data.loc[data.loc.length-1].confirmed;
                console.log(sconf);
     
  })        
 }

   render() {
    return (
    <div>
    <input onChange={this.onSub}></input>
    <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onClick={this.onC}>Click</button>
   
    
    </div>
    );
  }
    
}
export default Comp;