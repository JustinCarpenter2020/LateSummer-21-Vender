export default class Snack {
  constructor(name, price, quantity, img){
    this.name = name
    this.price = price
    this.quantity = quantity
    this.img = img
  }


  get Template(){
    return `
    <div class="col-3">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${this.name}</h4>
        <p class="card-text">${this.price} | quantity: ${this.quantity}</p> 
        <img src="${this.img}" class="img-fluid" />
        <button class="btn ${this.quantity > 4 ? "btn-success": this.quantity > 2 ? "btn-warning": "btn-danger"}" onclick="app.vendingController.buy('${this.name}')" ${this.quantity > 0 ? "" : 'disabled'}>Purchase</button>

      </div>
    </div>
    </div>`


      }

    }