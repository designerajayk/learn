import Validator from 'validator';



export default function validateInput(data) {
    let allEqual = arr => arr.every(v => v == arr[0] && arr[0] == 'success');
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = 'error';
    } else {
        errors.username = 'success';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'error';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'warning';
    } else {
        errors.email = 'success';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'error';
    } else {
        errors.password = 'success';
    }

    if (Validator.isEmpty(data.passwordCon)) {
        errors.passwordCon = 'error'
    } else if (!Validator.equals(data.password, data.passwordCon)) {
        errors.passwordCon = 'warning';
    } else {
        errors.passwordCon = 'success';
    }

    if (Validator.isEmpty(data.country)) {
        errors.country = 'error'
    } else {
        errors.country = 'success'
    }

    if (Validator.isEmpty(data.message)) {
        errors.message = 'error'
    } else {
        errors.message = 'success'
    }

    return {
        errors, isValid: allEqual(Object.values(errors))
    }
}
