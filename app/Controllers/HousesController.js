import { ProxyState } from "../AppState.js"
import { GetHouseFormTemplate } from "../forms/houseform.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  let template = ''
  ProxyState.houses.forEach(house => template += house.CardTemplate )
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  addHouse(){
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target

    const houseData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      type: form.type.value,
      img: form.img.value
    }

    try{
      housesService.addHouse(houseData)
    }catch(e){
      console.error('Failed to add House')
      return
    }

    form.reset()

  }
  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = /*html*/`
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
    // TODO build the house form
    // abstract it if you want
    document.getElementById('forms').innerHTML = GetHouseFormTemplate()
  }

  toggleHouseForm() {
    document.getElementById('house-form').classList.toggle('visually-hidden')
  }

}