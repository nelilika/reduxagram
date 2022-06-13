import axios from 'axios';

const URL = 'http://localhost:3000/candidates';

export default class Candidate {
  static async getCandidates() {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
}
