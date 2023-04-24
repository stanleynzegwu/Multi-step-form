import { proxy } from 'valtio'

const state = proxy({
    name: '',
    email: '',
    number: '',
    frequency: 'Monthly',
    selectedPlan: '',
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  });
  
  export default state;