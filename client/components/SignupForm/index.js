import React from 'react';
import map from 'lodash/map';

import countrys from '../../data/country';

import {FormGroup, ControlLabel, HelpBlock, FormControl, Button} from 'react-bootstrap';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordCon: '',
            country: '',
            message: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {

        this.setState({errors: {}})
        e.preventDefault();
        this.props.userSign(this.state).then(
()=>{},
({response})=>{this.setState({errors:response.data})}
);﻿
    }
    render() {
        const {errors} = this.state;
        const options = map(countrys, (val, key) => <option key={val} value={val}>{key}</option>
        )
        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup controlId="username" validationState={errors.username}>
                    <ControlLabel>User Name</ControlLabel>
                    <FormControl type="text" name="username" value={this.state.username} onChange={this.onChange}/>
                    <FormControl.Feedback/>
                </FormGroup>

                <FormGroup controlId="email" validationState={errors.email}>
                    <ControlLabel>Email address</ControlLabel>
                    <FormControl type="text" name="email" value={this.state.email} onChange={this.onChange}/>
                    <FormControl.Feedback/>
                </FormGroup>

                <FormGroup controlId="password" validationState={errors.password}>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    <FormControl.Feedback/>
                </FormGroup>

                <FormGroup controlId="passwordCon" validationState={errors.passwordCon}>
                    <ControlLabel>Password Conformation</ControlLabel>
                    <FormControl type="password" name="passwordCon" value={this.state.passwordCon} onChange={this.onChange}/>
                    <FormControl.Feedback/>
                </FormGroup>

                <FormGroup controlId="country" validationState={errors.country}>
                    <ControlLabel>Contry</ControlLabel>
                    <FormControl name="country" componentClass="select" placeholder="select" value={this.state.country} onChange={this.onChange}>
                        <option value="select" disabled>select</option>
                        {options}
                    </FormControl>
                    <FormControl.Feedback/>
                </FormGroup>

                <FormGroup controlId="message" validationState={errors.message}>
                    <ControlLabel>Message</ControlLabel>
                    <FormControl name="message" componentClass="textarea" value={this.state.message} onChange={this.onChange} placeholder="textarea"/>
                    <FormControl.Feedback/>
                </FormGroup>

                <FormGroup>
                    <Button type="submit" bsStyle="primary" bsSize="large" block>
                        Submit
                    </Button>
                </FormGroup>
            </form>

        );

    }
}

export default SignupForm;
