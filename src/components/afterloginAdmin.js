import React from 'react';
import  './afterloginAdmin.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { fontSize } from '@material-ui/system';

class afterloginAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:[],
            checked:[]
        }
    }

    componentDidMount=()=>{
        fetch('http://localhost:3003/check',{
        method:'post'
        }).then(response=>response.json())
        .then(data=>{
            this.setState({user:data})
            console.log("state user "+data);}
        )}

    onSend=()=>{
        console.log("Fix Appointement");
        fetch('http://localhost:3003/grab',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({checked:this.state.checked})
        }).then(response=>response.json()).then(data=>{
             if(data==='success'){
                console.log("onSend returned ");
                window.location.assign("http://localhost:3000/")
            }
            
        })
    }
    checkbox=(event)=>{
            console.log("checkbox event is "+event.target.id);
            this.setState({
                checked:this.state.checked.concat(event.target.id)
            })
            console.log(this.state.checked);
    }
    renderTableData=()=> {
        return this.state.user.map((user, index) => {
           const {id, name,gender,date,time,cause,mob} = user //destructuring
           return (
              <TableRow key={id}>
                 <TableCell style={{fontSize:'20px',padding:'30px'}}>{id}</TableCell>
                 <TableCell style={{fontSize:'20px' ,padding:'30px'}}>{name}</TableCell>
                 <TableCell style={{fontSize:'20px',padding:'30px'}}>{gender}</TableCell>
                 <TableCell style={{fontSize:'20px',padding:'30px'}}>{cause}</TableCell>
                 <TableCell style={{fontSize:'20px',padding:'30px'}}>{date}</TableCell>
                 <TableCell style={{fontSize:'20px',padding:'30px'}}>{time}</TableCell>
                 <TableCell style={{fontSize:'20px',padding:'30px'}}>{mob}</TableCell>
                 <TableCell  style={{fontSize:'20px'}}>
                 <input id={id} onChange={this.checkbox} style ={{height:'1.2em',width:'2.5em'}} type="checkbox" name="name1"/>&nbsp;</TableCell>
              </TableRow>
           )
        })
     }
    render(){
        return(
            <div id="main"><p id="patientStat">PATIENT &nbsp; APPOINTMENT &nbsp; STATUS</p>
            <div id="whole">
            <Paper id="pp" variant="outlined" elevation={5} >
            <div id="scrollable">
            <Table id='user'>
            <TableBody  id="tbody">
            <TableHead>
          {/* <TableRow id="row">
             <TableCell style={{fontSize:'20px',padding:'30px'}}>Id</TableCell>
             <TableCell  style={{fontSize:'20px',padding:'30px'}}>Name</TableCell>
             <TableCell style={{fontSize:'20px',padding:'30px'}}>Cause</TableCell>
             <TableCell style={{fontSize:'20px',padding:'30px'}}>Date</TableCell>
             <TableCell style={{fontSize:'20px',padding:'30px'}}>Time</TableCell>
          </TableRow> */}
        </TableHead>
                  {this.renderTableData()}
                
               
            </TableBody>
            </Table>
            </div>
            </Paper>
            </div>
            <button onClick ={this.onSend} style={{fontSize: '1.2em'}}class="btn btn-primary">Fix Appointment</button>
            </div>
            
        );
    }
}
export default afterloginAdmin;