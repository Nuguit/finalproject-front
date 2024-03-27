import SafeMapService from "../../services/profile.service"

const loaderContributions = async () => {
    const myContributions = await SafeMapService.contributions()
  return myContributions
}

export default loaderContributions