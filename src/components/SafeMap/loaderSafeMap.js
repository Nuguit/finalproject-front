import SafeMapService from "../../services/profile.service"

const loaderSafeMap = async () => {
const allWarnings = await SafeMapService.getAllWarnings()

  return  allWarnings

  
   
  
}

export default loaderSafeMap