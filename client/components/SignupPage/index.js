import React from 'react';
import {
    FormGroup,
    ControlLabel,
    HelpBlock,
    Checkbox,
    Radio,
    FormControl,
    Button,
    Row,
    Col,
    Well
} from 'react-bootstrap';

class SignupPage extends React.Component {
  render(){
    function FieldGroup({id, label, help, text}) {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl type={text}/> {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
            );
        }
    return(
      <div className="container">

              <Row>
                  <Col sm={6} smOffset={3}>

                      <form>
                          <FieldGroup id="username" type="text" label="User Name" placeholder="Enter text"/>
                          <FieldGroup id="email" type="email" label="Email address" placeholder="Enter email"/>
                          <FieldGroup id="password" label="Password" type="password"/>
                          <FieldGroup id="passwordCon" label="Password Conformation" type="password"/>


                          <FormGroup controlId="formControlsSelect">
                              <ControlLabel>Contry</ControlLabel>
                              <FormControl componentClass="select" placeholder="select">
                                  <option value="select" disabled>select</option>
                                  <option value="other">...</option>
                              </FormControl>
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                              <ControlLabel>Textarea</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="textarea"/>
                          </FormGroup>

                          <FormGroup>
                            <Button type="submit" bsStyle="primary" bsSize="large" block>
                                Submit
                            </Button>
                         </FormGroup>
                      </form>
                  </Col>
              </Row>
          </div>
    );

  }
}


export default SignupPage;
