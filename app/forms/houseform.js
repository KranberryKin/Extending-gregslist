export function GetHouseFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()" id="house-form">
    <div class="form-group">
      <label for="bedrooms" class="">Bedrooms:</label>
      <input type="text" class="form-control" name="bedrooms" id="bedrooms" required>
    </div>

    <div class="form-group">
      <label for="bathrooms" class="">Bathrooms:</label>
      <input type="text" class="form-control" name="bathrooms" id="bathrooms" required>
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input type="number" class="form-control" name="price" id="price" min="0" max="9999999">
    </div>
    <div class="form-group">
      <label for="type" class="">Type:</label>
      <input type="text" class="form-control" name="type" id="type" required>
    </div>
    <div class="form-group">
      <label for="img" class="">Img:</label>
      <input type="url" class="form-control" name="img" id="img" required>
    </div>
    <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
  </form>
  `
}