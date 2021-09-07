import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"



class HousesService{

  addHouse(){
    var newHouse = new House(data)
    ProxyState.houses = [...ProxyState.houses, newHouse]
    ProxyState.houses = ProxyState.houses
  }


}
export const housesService = new HousesService()