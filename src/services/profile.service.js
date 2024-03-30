import AxiosConfig from "./axios"

class SafeMapService extends AxiosConfig {
  constructor() {
    super("profile")
  }

  async getAllWarnings() {
    const response = await this.axios.get("/safemap")
    //console.log(response.data)
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
    }}


export default new SafeMapService