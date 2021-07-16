import VendingController from "./Controllers/VendingController.js";


class App {
 vendingController = new VendingController();
 
}

window["app"] = new App();
