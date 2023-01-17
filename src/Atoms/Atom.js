import {atom} from 'recoil'

export const atomState = atom({
    key: 'remote',
  default:  [{
    Email: '',
    Password : ''
  }] , 
})

