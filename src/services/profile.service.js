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
  
   
  
  
  
  
  
  
  
  }


export default new SafeMapService