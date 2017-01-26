import axios from 'axios';

export function userSign(data) {
  return dispatch => {
    return axios.post('/api/users', data)
  }
}
