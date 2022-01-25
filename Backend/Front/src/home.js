import React, { Component } from "react";
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row,Col } from "react-bootstrap";
//import useLocation from "react-router-dom";
import Appointment from "./Appointment";
import { Tab } from "react-bootstrap";
class Home extends Component{
    state ={stop1:[], stop2:[] }
   
    componentDidMount() {
     // const search1  = new useLocation().search;
    // const phyid = new URLSearchParams(this.props.location.search);
     //const id = phyid.get('phid')
        //For getting data for stop 1 
        setInterval( () => {
            fetch('/api/getAll')
            .then(res => res.json())
            .then(stop1 => this.setState({ stop1}))
          },1000)
       
        //for getting data for stop 2
        
        setInterval( () => {
            fetch(`/api/getAppointments/1`)
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
     
    <div className="App">
    
     <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">MY APPOINTMENTS</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="https://www.linkedin.com/in/itsmeetkumarpatel/">MyLinkedIn</Nav.Link>
      <Nav.Link href="https://github.com/itsmeetkumar">My GitHub</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <Container>
    <h1>All APPOINTMENTS -{this.state.curTime} </h1>
    <br />
    <Row>
      
    
    

    

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
      {this.state.stop1.map(user =><Nav.Item>  <Nav.Link eventKey={user.id}> {user.name}  
  
      </Nav.Link>
        </Nav.Item>
   )}
        
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
      {this.state.stop1.map(user =><Tab.Pane eventKey={user.id}>  <h1> <b>{user.name}</b> </h1> 
      <Appointment pid={user.id} />
      </Tab.Pane>
   )}
        
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

<hr />
 




    
    </Row>
    
  </Container>
    </div>
  );
}
}
export default Home;
