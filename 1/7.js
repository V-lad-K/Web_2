class Body {
    clsArr = []
    constructor(name) {
        this.name = name
        this.clsArr.push(this.name)
    }
    pushItem(name = String) {
        
        this.clsArr.push(name)
    }

    getItem(){
        console.log(this.clsArr)
    }

    editItem(number = Number, name = String) {
        this.clsArr[number] = name
    }

    deleteItem(number = Number) {
        this.clsArr.splice(number,number)
    }

    findItem(name = String) {
        return this.clsArr.includes(name)
    }
}
class Space_station extends Body {
    pushItem(name = String) {
        this.clsArr.push(name)
        planet.space_stations.push(name)
    }
}

class Planet extends Body { 
    space_stations = [] 
}

class Cargo extends Body {  
}

class DeliveredGoods extends Body {  
}


let space_station = new Space_station("first")
let planet = new Planet("11")
planet.pushItem('planet2')
planet.pushItem("planet-3")
space_station.pushItem("qwer")
space_station.pushItem("123")
space_station.getItem()
space_station.editItem(1, "www")
space_station.getItem()
space_station.deleteItem(1)
space_station.getItem()


planet.pushItem("222")
planet.pushItem("3")
planet.getItem()

console.log(planet.space_stations)
console.log(space_station.findItem("first33"))

