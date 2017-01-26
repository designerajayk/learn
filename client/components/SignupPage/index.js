import React from 'react';
import SignupForm from '../SignupForm';
import {connect} from 'react-redux';
import { userSign } from '../../actions/Signup';

import {
    Row,
    Col
} from 'react-bootstrap';

class SignupPage extends React.Component {
  render(){
    const {userSign} = this.props;
    return(
      <div className="container">
              <Row>
                  <Col sm={6} smOffset={3}>
                    <SignupForm userSign={userSign} />
                  </Col>
              </Row>
          </div>
    );

  }
}

SignupPage.propTypes = {
  userSign: React.PropTypes.func.isRequired
}

export default connect(null, {userSign} )(SignupPage);
