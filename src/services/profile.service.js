import AxiosConfig from "./axios"

class SafeMapService extends AxiosConfig {
  constructor() {
    super("/profile")
  }

  async getAllWarnings() {
    const response = await this.axios.get("/safemap")
    console.log(response.data)
    return response.data
  }

  async contributions(){
    const response = await this.axios.get("/contribuciones")
    console.log(response.data)
    return response.data
  }

   async createWarning(data) {
    data.location = {
     type: "Point",                      
    coordinates: [12, -43],
    }
    const response = await this.axios.post("/safemap", data)
    return response.data
  }

  async editProfile( data) {
    const response = await this.axios.put("/tuperfil", data)
    return response.data
  }

}

export default new SafeMapService