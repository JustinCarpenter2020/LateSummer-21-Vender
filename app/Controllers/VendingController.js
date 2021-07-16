import { vendingService } from "../Services/VendingService.js";
import { ProxyState } from "../AppState.js";
import NotificationService from "../Services/NotificationService.js";

function _drawMoney(){
  document.getElementById("money").innerHTML = ProxyState.money.toString()
}

function _draw(){
 //id snacks to inject into
 let template = ''
 ProxyState.snacks.forEach(s => template += s.Template)
 document.getElementById('snacks').innerHTML = template
}

export default class VendingController{
  constructor(){
    ProxyState.on('money', _drawMoney)
    ProxyState.on('snacks', _draw)
    _draw()
  }

  addMoney(amount){
    vendingService.addMoney(amount)
  }

  async buy(item){
    if(await NotificationService.confirmAction("Are you sure you wanna buy " + item)){
      vendingService.buy(item)
      NotificationService.toast("You did it, yayayaya calories")
    }
  }
}