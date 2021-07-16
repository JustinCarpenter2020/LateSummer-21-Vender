import Snack from "./Models/Snack.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  money = 0

  snacks = [new Snack("Doritos", 2, 5, "https://i5.walmartimages.com/asr/3540aa46-fee9-4aa6-b53f-6e335280fc58.c0ab6faaafd180e702c4a5e3ed16eb70.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff")]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
