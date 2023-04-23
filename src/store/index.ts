import { proxy } from 'valtio'

const state = proxy({
    name: '',
    email: '',
    number: '',
  });
  
  export default state;