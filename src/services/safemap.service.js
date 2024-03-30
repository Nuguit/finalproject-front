import AxiosConfig from "./axios"

class WarningService extends AxiosConfig {
  constructor() {
    super("profile")
  }

async getAllWarnings() {
    const response = await this.axios.get("/safemap")
    console.log("GETALLWARNINGS", response.data)
    return response.data
  }





  async createWarning(token, warningdata) {
    warningdata.location = {
      type: "Point",                      
     coordinates: [12, -43],
     }
     const response = await this.axios.post("/safemap", warningdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
     }
     
     )
     return response.data
   }

}
export default new WarningService