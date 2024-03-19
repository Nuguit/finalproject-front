import AxiosConfig from "./axios"

class SafeMapService extends AxiosConfig {
  constructor() {
    super("warnings")
  }

  async getAllWarnings() {
    const response = await this.axios.get("/contribuciones")
    return response.data
  }

   //async createWarning(data) {
    //data.location = {
     // type: "Point",                      <--LOCATION O GOOGLE MAPS????
      //coordinates: [12, -43],
    //}
    //const response = await this.axios.post("/safemap", data)
    //return response.data
  //}

  
}

export default new SafeMapService()