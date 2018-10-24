import { AUTH_USER, AUTH_ERROR } from './types'
import axios from 'axios'

// redux-thunk allows up to pass functions into dispatch instead of objects
export const signup = ({ email, password }) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', { email, password })
    dispatch({ type: AUTH_USER, payload: response.data.token})
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload:  'Sorry bout your err brother..'})
  }
}
