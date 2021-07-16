import { ProxyState } from "../AppState.js"

class VendingService {
  buy(item) {
    let found = ProxyState.snacks.find(s => s.name == item)
    if(ProxyState.money >= found.price){
      ProxyState.money -= found.price
      found.quantity--
      ProxyState.snacks = ProxyState.snacks
    } else {
      window.alert("you poor")
    }
  }
  addMoney(amount) {
   ProxyState.money += amount
  }


}



export const vendingService = new VendingService()