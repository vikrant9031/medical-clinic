import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      conf: '',
      death:'',
      rec:'',
      cur_date:''
    };
  }
 
dat =()=>{
   fetch('https://pomber.github.io/covid19/timeseries.json')
   .then(response=>response.json())
   .then(data=>{ var a = data.India[data.India.length-1].confirmed;
                 var b = data.India[data.India.length-1].deaths;
                 var c = data.India[data.India.length-1].recovered;
                 var cur_date  = data.India[data.India.length-1].date;
           this.setState({conf:a});
           this.setState({death:b});
           this.setState({rec:c});
           this.setState({cur_date:cur_date});
           console.log(this.state.conf);
         })
        }

      

  render() {
    return (
      <div>
    <h1 onClick={this.dat}> Click</h1>
    <h1>{this.state.val}</h1>
    </div>
    );
  }
}

export default Contact;