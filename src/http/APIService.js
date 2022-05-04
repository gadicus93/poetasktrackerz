  /* eslint-disable */
import axios from 'axios';
//const API_URL = 'https://akanley.pythonanywhere.com';
const API_URL = 'https://poetasktracker.pythonanywhere.com';

export class APIService {
  constructor() {

  }

   getCharacter(param_pk) {
     const url = `${API_URL}/api/characters/${param_pk}`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::"+jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }

   getCharacterList() {
    const url = `${API_URL}/api/characters/`;
    let jwtToken = localStorage.getItem('token');
    console.log(":::jwtToken:::::"+jwtToken);
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.get(url, {headers: headers});

  }

  addNewCharacter(character){
   const url = `${API_URL}/api/characters/`;
   let jwtToken = localStorage.getItem('token');
   const headers = {Authorization: `jwt ${jwtToken}`};
   return axios.post(url, character, {headers: headers});
  }

  updateCharacter(character){
    const url = `${API_URL}/api/characters/${character.pk}`;
    let jwtToken = localStorage.getItem('token');
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.put(url, character, {headers: headers});
  }

  deleteCharacter(character_Pk){
     const url = `${API_URL}/api/characters/${character_Pk}`;
     let jwtToken = localStorage.getItem('token');
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.delete(url, {headers: headers});
  }

   getTaskList(param_pk) {
     const url = `${API_URL}/api/task_list/${param_pk}`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::"+jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }

  getTaskList() {
    const url = `${API_URL}/api/task_list/`;
    let jwtToken = localStorage.getItem('token');
    console.log(":::jwtToken:::::"+jwtToken);
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.get(url, {headers: headers});

  }

  authenticateLogin(credentials) {
    const url = `${API_URL}/auth/`;
    return axios.post(url, credentials);
  }

  registerUser(credentials) {
    const url = `${API_URL}/register/`;
    credentials.customusername = credentials.username
    return axios.post(url, credentials);
  }

  updateTasks(tasks){
    const url = `${API_URL}/api/task_list/${tasks.pk}`;
    let jwtToken = localStorage.getItem('token');
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.put(url, tasks, {headers: headers});
  }
}