import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const TextArea = ({id, error, label, type, value, onChange}) => {
  return(
    <FormGroup controlId={id} validationState={error}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type={type} name={id} value={value} onChange={onChange}/>
        <FormControl.Feedback/>
    </FormGroup>
  )
}
TextArea.propTypes = {
  id: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
}
TextArea.defaultProps = {
  type: 'text',
  error: null
}

export default TextArea;
