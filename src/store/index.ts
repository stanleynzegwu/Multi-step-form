import { proxy } from 'valtio'
import _ from 'lodash'

interface State {
  name: string;
  email: string;
  number: string;
  frequency: string;
  selectedPlan: string;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
  success:boolean;
  [key: string]: any; // index signature
}

const initialState: State = {
  name: '',
  email: '',
  number: '',
  frequency: 'Monthly',
  selectedPlan: '',
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
  success:false
};

const state = proxy(initialState);

const reset = () => {
  const resetObj = _.cloneDeep(initialState);
  Object.keys(resetObj).forEach((key) => {
    state[key] = resetObj[key];
  });
};

export {state, reset}