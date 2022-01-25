import React from "react";
import { Table } from "react-bootstrap";

 class Appointment extends React.Component{
    state ={stop1:[], stop2:[] }
   
    componentDidMount() {
    
        //for getting data for stop 2
        const pid = this.props.pid;
        setInterval( () => {
            fetch(`/api/getAppointments/${pid}`)
            .then(res => res.json())
            .then(stop2 => this.setState({ stop2}))
          },1000)

            
            // For live time update
            setInterval( () => {
                this.setState({
                  curTime : new Date().toLocaleString('en-GB')
                })
              },1000)

    }

    render(){


        return (
          <div> 
              

    <Table>
        <thead>
            <th>Name</th>
            <th>Time</th>
            <th>Kind</th>
        </thead>
        <tbody>
        {this.state.stop2.map(user =>( 
        <tr><td>{user.name}</td> <td> {user.time}</td> <td>{user.kind} </td>  </tr>)
    )}        
        </tbody>
    </Table>
              
          </div>  
        );
    }
}
export default Appointment;