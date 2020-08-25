import axios from "axios"

class SampleService {
  async getUsers() {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/users`)
      // do something with result
    } catch (err) {
      console.error(err)
    }
  }
}

export default SampleService
