import { generateId } from "../Utils/generateId.js"

export class House{
  constructor(data){
    this.id = data.id || generateId()
    this.bedrooms = data.bedrooms,
    this.bathrooms = data.bathrooms,
    this.price = data.price,
    this.type = data.type,
    this.img = data.img
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>${this.bedrooms}bd - ${this.bathrooms}bath</span>
            <span>$ ${this.price}</span>
          </h5>
          <p>${this.type}</p>
        </div>
      </div>
    </div>
    `
  }
}