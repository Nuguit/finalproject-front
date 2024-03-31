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





  async createWarning(token, warningData) {
    try {
      // Verificar si las coordenadas del marcador están presentes y son válidas
      if (!warningData.markerCoordinates || warningData.markerCoordinates.length !== 2 || warningData.markerCoordinates.some(coord => isNaN(coord))) {
        throw new Error('Las coordenadas del marcador son inválidas');
      }
      const [lng, lat] = warningData.markerCoordinates;
        const requestData = {
        input: warningData.input,
        location: {
          type: "Point",
          coordinates: [lng, lat],
        }
      };
       const response = await this.axios.post("/safemap", requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      return response.data;
    } catch (error) {
      console.error('Error al crear warning:', error);
      throw error;
    }
  };}
  
export default new WarningService