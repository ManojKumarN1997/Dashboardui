import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Badge,Form, FormGroup, Label, Input, Container, Row, Col,InputGroup, InputGroupAddon, Fade, Button } from 'reactstrap';
import Homepage1 from './homepage1';
class Registration extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                
            <Row>
            <Col sm="12" md={{ size: 4, offset: 4 }} className="logincontent">
    <div className="FormCenter">

     
        <Form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
      
        <div>
        <h1>Register</h1>
        </div>
              <Form>
        <FormGroup>
       
        
          
          <Input type="text" name="username" id="examplename" placeholder="Username" />
      <br />
        </FormGroup>
        <FormGroup>
         
          <Input type="email" name="email" id="exampleemail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
        <br />
         <Input type="password" name="password" id="examplePassword" placeholder="password" />
       </FormGroup>
        
      </Form>
      

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">Terms of service</a>
                </label>
              </div>

              <div className="FormField">
              <Link to="/homepage1"><Button color="primary" size="lg" className ="login">Register</Button>
        </Link><br />
              <label className="mem">Already have an account.?</label> 
                  <Link to="/login" className="loginlink">Login</Link>
              </div>
         
           
            </Form>
            </div>
            </Col>
          </Row>

          </Container>
        );
    }
}

export default Registration;
