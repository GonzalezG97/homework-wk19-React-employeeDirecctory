import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: () => {
        return axios.get('https://randomuser.me/api/?results=50&nat=us');
    }
}










