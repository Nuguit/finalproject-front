import AxiosConfig from "./axios"

class SafeMapService extends AxiosConfig {
  constructor() {
    super("profile")
  }

 

  async contributions(){
    const response = await this.axios.get("/contribuciones")
    console.log(response.data)
    return response.data
  }


    
  async editProfile(userId, token, data) {
    try {
      const response = await this.axios.put(`/tuperfil/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al editar perfil:', error);
      throw error;
    }
  }

  
    async deleteUser(userId, token) {
      try {
        const response = await this.axios.delete(`/tuperfil/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw error;
      }
    }



    async getAllWarnings(token) {
      const response = await this.axios.get("/safemap", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }  
      )
      console.log("GETALLWARNINGS", response.data)
      return response.data
    }





  async createWarning(token, warningData) {
    try {
      
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
  };
   
  
  
  
  
  
  
  
  }


export default new SafeMapService