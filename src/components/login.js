import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Badge,Form, FormGroup, Label, Input, Container, Row, Col,InputGroup, InputGroupAddon, Fade, Button } from 'reactstrap';
import Homepage from './homepage';
class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
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
            <div className="FormField">
            <div>
            <h1>Login</h1>
            </div>
           
            <Form>
        <FormGroup>
            
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      
      <br />
        </FormGroup>
        <FormGroup>
         
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
         
        </FormGroup>
        
      </Form>
      </div>
      <div>
      <label className="checkbox">
                    <input type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} />Remember Me
                    </label>
            
             
           
        <Link to="/" ><label className="forget">Forget password.?</label></Link><br />
        </div>
        <Link to="/homepage"><Button color="primary" size="lg" className ="login">Login</Button>
        </Link><br />
    
        <div>
        <Link to="/"><label className="rec">Recover password</label></Link>
        <Link to="/"><label className="acc">Create an account</label></Link>
     
                 
              </div>
            </Form>
          </div>
          </Col>
        </Row>
        
          </Container>
        );
    }
}

export default Login;
