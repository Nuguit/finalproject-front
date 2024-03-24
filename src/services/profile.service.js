import AxiosConfig from "./axios"

class SafeMapService extends AxiosConfig {
  constructor() {
    super("warnings")
  }

  async getAllWarnings() {
    const response = await this.axios.get("/contribuciones")
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

  async editProfile(id, data) {
    const response = await this.axios.put(`/tuperfil/${id}`, data)
    return response.data
  }

}

export default new SafeMapService()