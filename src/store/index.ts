import { proxy } from 'valtio'

const state = proxy({
    name: '',
    email: '',
    number: '',
    frequency: 'Monthly',
    selectedPlan: ''
  });
  
  export default state;