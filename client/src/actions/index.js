import { AUTH_USER } from './types'
import axios from 'axios'

// redux-thunk allows up to pass functions into dispatch instead of objects
export const signup = ({ email, password }) => dispatch => {
  axios.post('http://localhost:3090/signup', { email, password })
}
