import React from 'react';
import './home.css';
import {Link}  from 'react-router-dom'; 
import {Chart} from 'chart.js';
import Vash4 from './vash4.jpg';
import Vash5 from './vash5.jpeg';
import Vash3 from './vash3.jpg';

class  Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      conf: 0,
      death:0,
      rec:0,
      cur_date:'',
      one:0,
      two:0,
      three:0,
      four:0
    };
  }
  login=()=>{
		window.location.replace('https://obscure-river-10857.herokuapp.com/loginPatient');
	}
	login2=()=>{
		window.location.replace('https://obscure-river-10857.herokuapp.com/loginAdmin');
  }
  onCheck=()=>{
    fetch('https://pomber.github.io/covid19/timeseries.json')
    .then(response=>response.json())
    .then(data=>{ var a = data.India[data.India.length-1].confirmed;
                  var b = data.India[data.India.length-1].deaths;
                  var c = data.India[data.India.length-1].recovered;
                  var cur_date  = data.India[data.India.length-1].date;
                  var two =  data.US[data.US.length-1].confirmed;
                  var three = data.Italy[data.Italy.length-1].confirmed;
                  var four = data.Spain[data.Spain.length-1].confirmed;
                  var one = data.China[data.China.length-1].confirmed;
            this.setState({conf:a});
            this.setState({one:one});
            this.setState({two:two}); 
            this.setState({three:three});
            this.setState({four:four});
            this.setState({death:b});
            this.setState({rec:c});
            this.setState({cur_date:cur_date});
            console.log(this.state.conf);
            console.log(this.state.in);
            
          var ctx = document.getElementById('myChart');
      
          var myChart = new Chart(ctx, {
              type: 'doughnut',
              data: {
                  labels: ['India', 'China', 'US', 'Italy', 'Spain'],
                  datasets: [{
                    legend:{
                      label:{
                        fontColor: 'black'
                      } ,
                    },
                     
                      data: [this.state.conf,this.state.one,this.state.two,this.state.three,this.state.four],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.8)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'grey',
                          'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                          'black',
                          'black',
                          'black',
                          'black',
                          'black'
                         
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                "responsive": true,
                "maintainAspectRatio": false,
                  animation: {
                    duration: 5000
                  }
              }
          });
          })
  }
  componentDidMount=()=>{
        this.onCheck();
          
  }
render(){
  return (
    <div>
<div class="nameHead">
   <p>ENTCure</p>
   <div class="logoHead">
   <i class="fa fa-clock-o">&nbsp; 
         TIME: 10:00 - 18:00<br/>
         Sat - Sun: CLOSED</i>
   </div>
   </div>

   <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style={{"backgroundColor":"rgba(0,188,209,0.8)"}}>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="list-inline">
       <li  class="list-inline-item"><Link to="/book"><button class="btn btn-danger">Book Appointment</button></Link></li>
   <li  class="list-inline-item"><Link><button class="btn btn-info" data-toggle="modal" data-target="#myModal">Login</button></Link></li>
   <li  class="list-inline-item"><Link to="/signAdmin"><button class="btn btn-info">SignUp</button></Link></li>
    </ul>
    </div>
  </div>
</nav>

 <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Login As</h4>
        </div>
        <div class="modal-body">
          <p><i class="fa fa-user" aria-hidden="true"></i><Link to="/loginAdmin"><button type="button" class="btn btn-default" onClick={this.login2}>Admin</button></Link></p>
          <p><i class="fa fa-wheelchair"></i><Link to="/loginPatient"><button type="button" class="btn btn-default" onClick={this.login}>Patient</button></Link></p>
        </div>
      
      </div>
</div>
</div>

{/* <div id="text" class="animated slideInDown"><p>We provide</p><span>HEALTH &nbsp;CARE&nbsp; SOLUTIONS</span></div> */}
<div id="bannerText">
<span><p>We provide </p></span>
<span><p>HEALTH &nbsp;CARE&nbsp;SOLUTIONS</p></span>
</div>
 <div id="slider">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
   
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner">
      <div class="item active">
        <img src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Los Angeles"/>
      </div>

      <div class="item">
        <img src="https://blog.ipleaders.in/wp-content/uploads/2018/02/BV-Acharya-3.jpg" alt="Chicago"/>
      </div>
    
      <div class="item">
        <img src="https://www.physiciansweekly.com/wp-content/uploads/2018/04/a388e7f1-istock-894125638-1254x640.jpg" alt="New york"/>
      </div>
    </div>

    
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
    </div>

</div>

<div class="whyChoose">
 <p>Why Choose us?</p>
 <p class="whyChoosetext">We provide best care.It is safe & compassionaposition: fixed;te care at its best for everyone.Emergency Care
Medical makes everything better with care.Latest Technology
Medical makes everything better with care.Qualified Doctor
Medical makes everything better with care.
</p>
</div>
<p id="mar"><marquee scrollamount="20"><p>COVID-19 (Novel Corona Virus) Current Status in India Till {this.state.cur_date}. The status is updated every 3 hrs.  Stay at Home and give a contribution in this pandemic to our Nation.</p></marquee></p>
<div id="covid">
  <div>Total<br></br>
   <p>{this.state.conf}</p></div>
   <div>Recovered<br></br>
  <p>{this.state.rec}</p></div>
    <div>Deaths<br></br>
  <p>{this.state.death}</p></div>
</div>

<div id="can"><canvas id="myChart" width="600" height="200" ></canvas></div>
<div class="gallery">
<span><img src={Vash4}></img></span>
<span><img src={Vash5}></img></span>
<span><img src={Vash3}></img></span>


</div>

<div class="records">
<span>
<p class="number">500+</p>
<p class="label">Happy Patients</p>
</span>

<span>
<p class="number">1000+</p>
<p class="label">Our Services</p>
</span>

<span>
<p class="number">1400+</p>
<p class="label">Consultations</p>
</span>

<span>
<p class="number">500+</p>
<p class="label">&nbsp;Our &nbsp;Staffs</p>
</span>

</div>

<div class="footer">
   <span> <i class="fa fa-envelope" aria-hidden="true">	&nbsp;</i><p>madhukarllrm2k4@gmail.com</p></span>
   <span><i class="fa fa-map-marker"></i><p>THE ELIXIR - Benajhabar Road near MotijheelOJ ENT CARE</p><p>- Kalyanpur, Bithoor Road near Block Gate Office</p></span>
   <span><Link to="/about" href="#" ><i class="fa fa-phone">	&nbsp;</i></Link><p>+91 7007690118</p><p>0512 3593413</p></span>
</div>
      
    </div>
  );

  }
}

export default Home;