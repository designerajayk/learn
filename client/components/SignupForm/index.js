import React from 'react';
import map from 'lodash/map';
import validateInput from '../../../server/shared/validations/signup';
import TextArea from '../common/TextArea';

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
            errors: {},
            isLoad: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    isValid(){
      const { errors, isValid } = validateInput(this.state);

      if(!isValid){
        this.setState({errors})
      }
      return isValid;
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
      e.preventDefault();
      if(this.isValid()){
        this.setState({errors: {}, isLoad: true})
        this.props.userSign(this.state).then(
          () => {
            //browserHistory.push('/');
            this.context.router.push('/');
          },
          ({response}) => {
            this.setState({errors: response.data, isLoad: false})
        });}
    }
    render() {
        const {errors} = this.state;
        const options = map(countrys, (val, key) => <option key={val} value={val}>{key}</option>
        )
        return (
            <form onSubmit={this.onSubmit}>
              <TextArea id="username" label="User name" error={errors.username} onChange={this.onChange} value={this.state.username} />
              <TextArea id="email" label="Email address" error={errors.email} onChange={this.onChange} value={this.state.email} />
              <TextArea id="password" label="Password" type="password" error={errors.password} onChange={this.onChange} value={this.state.password} />
              <TextArea id="passwordCon" label="Password Conformation" type="password" error={errors.passwordCon} onChange={this.onChange} value={this.state.passwordCon} />
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
                    <Button disabled={this.state.isLoad} type="submit" bsStyle="primary" bsSize="large" block>
                        Submit
                    </Button>
                </FormGroup>
            </form>

        );

    }
}

SignupForm.propTypes = {
  userSign: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}


export default SignupForm;
