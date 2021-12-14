class Body{ 
    Push(){
        var to = document.querySelector(".subtitle").textContent       
        var obj = {
            field1: 1,
            field2: "name",
            field3: 1,
            need: 1           
        };
        var inumber = (document.getElementById("validationCustom04").value)
        var iname = (document.getElementById("validationCustom01").value)
        var icapacity = (document.getElementById("validationCustom02").value)
        
        obj.field1 = inumber
        obj.field2 = iname
        obj.field3 = icapacity           
        var serialObj = JSON.stringify(obj); 

        localStorage.setItem(to+String(inumber), serialObj);
        var returnObj = JSON.parse(localStorage.getItem(to+String(inumber) ))
        document.getElementById(String(inumber)).innerHTML = '<th id="'+to+obj.field1+ '" scope'+'='+'"row">'+returnObj.field1 + '</th>'+ '<td id="'+to+obj.field2+'">' + obj.field2 + '</td><td id="'+to+obj.field3+'">' + obj.field3 + '</td></tr>'     
    }

    Delete(){ 
        var to = document.querySelector(".subtitle").textContent           
  
        var inumber = (document.getElementById("validationCustom04").value)
        var iname = (document.getElementById("validationCustom01").value)
        var icapacity = (document.getElementById("validationCustom02").value)
 
        localStorage.removeItem(to+String(inumber));
        var del1 = document.getElementById(to+String(inumber))
        var del2 = document.getElementById(to+String(iname))
        var del3 = document.getElementById(to+String(icapacity))

        del1.remove() 
        del2.remove() 
        del3.remove()       
    }
    Search(){   
        var to = document.querySelector(".subtitle").textContent          
        var i = 1
        while(i){
            try{
                var returnObj = JSON.parse(localStorage.getItem(to+String(i)))                    
                var del1 = document.getElementById(to+returnObj.field1)
                var del2 = document.getElementById(to+returnObj.field2)
                var del3 = document.getElementById(to+returnObj.field3)

                del1.remove()  
                del2.remove()  
                del3.remove()
            }
            catch(e){
                break
                
            }

        i++
        }
        var iname = document.getElementById("validationCustom03").value;  
        var returnObj = JSON.parse(localStorage.getItem(to+String(iname) ))
        document.getElementById(String(iname)).innerHTML = '<th id="'+to+returnObj.field1+ '" scope'+'='+'"row">'+returnObj.field1 + '</th>'+ '<td id="'+to+returnObj.field2+'">' + returnObj.field2 + '</td><td id="'+to+returnObj.field3+'">' + returnObj.field3 + '</td></tr>'  
           
    }
    
    DeleteAll(){
   
        var i = 1
        while(i){
            try{
                var returnObj = JSON.parse(localStorage.getItem("Space Station"+String(i)))                    
                var del1 = document.getElementById("Space Station"+returnObj.field1)
                var del2 = document.getElementById("Space Station"+returnObj.field2)
                var del3 = document.getElementById("Space Station"+returnObj.field3)
                del1.remove()  
                del2.remove()  
                del3.remove()
                i++
            }
            catch(e){
                break
            }
        }
        var i = 1
        while(i){
            try{
                var returnObj = JSON.parse(localStorage.getItem("Planet"+String(i)))                    
                var del1 = document.getElementById("Planet"+returnObj.field1)
                var del2 = document.getElementById("Planet"+returnObj.field2)
                var del3 = document.getElementById("Planet"+returnObj.field3)
                del1.remove()  
                del2.remove()  
                del3.remove()
                i++
            }
            catch(e){
                break
            }
        }
        
        var i = 1
        while(i){
            try{
                var returnObj = JSON.parse(localStorage.getItem("Cargo"+String(i)))                    
                var del1 = document.getElementById("Cargo"+returnObj.field1)
                var del2 = document.getElementById("Cargo"+returnObj.field2)
                var del3 = document.getElementById("Cargo"+returnObj.field3)
                del1.remove()  
                del2.remove()  
                del3.remove()
                i++
            }
            catch(e){
                break
            }
 
        }
        var i = 1
        while(i){
            try{
                var returnObj = JSON.parse(localStorage.getItem("transferToStation"+String(i)))                    
                var del1 = document.getElementById("transferToStation"+returnObj.code)
                var del2 = document.getElementById("transferToStation"+returnObj.name)
                var del3 = document.getElementById("transferToStation"+returnObj.cargo)
                del1.remove()  
                del2.remove()  
                del3.remove()
                i++
            }
            catch(e){
                break
            }
        }
        var i = 3
        while(i<5){
            try{
                var returnObj = JSON.parse(localStorage.getItem("transferToPlanet"+String(i)))                    
                var del1 = document.getElementById("transferToPlanet"+returnObj.code)
                var del2 = document.getElementById("transferToPlanet"+returnObj.name)
                var del3 = document.getElementById("transferToPlanet"+returnObj.cargo)
                del1.remove()  
                del2.remove()  
                del3.remove()
                i++
            }
            catch(e){
                break
            }
                
                
        }  
        
    }
    
    Need(){
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
                if(returnObj.field2 == station_name){
                    
                    var obj2 = {
                        field1: 1,
                        field2: 1,
                        field3: "h",
                        need: 1
                    };
                    var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
                    obj2.field1 = returnObj.field1
                    obj2.field2 = returnObj.field2
                    obj2.field3 = returnObj.field3
                    obj2.need = returnObj.need - 1/returnObj.field3
                    var serialObj = JSON.stringify(obj2);  
                    localStorage.setItem("Space Station"+1, serialObj)
                } 
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
                if(returnObj.field2 == station_name){
                   
                    var obj2 = {
                        field1: 1,
                        field2: 1,
                        field3: "h",
                        need: 1
                    };
                    var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
                    obj2.field1 = returnObj.field1
                    obj2.field2 = returnObj.field2
                    obj2.field3 = returnObj.field3
                    obj2.need = returnObj.need - 1/returnObj.field3
                    var serialObj = JSON.stringify(obj2);  
                    localStorage.setItem("Space Station"+2, serialObj)
                } 
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
        if(returnObj.field2 == station_name){
           
            var obj2 = {
                field1: 1,
                field2: 1,
                field3: "h",
                need: 1
            };
            var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
            obj2.field1 = returnObj.field1
            obj2.field2 = returnObj.field2
            obj2.field3 = returnObj.field3
            obj2.need = returnObj.need - 1/returnObj.field3
            var serialObj = JSON.stringify(obj2);  
            localStorage.setItem("Space Station"+3, serialObj)
        }  
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
                if(returnObj.field2 == station_name){
                    
                    var obj2 = {
                        field1: 1,
                        field2: 1,
                        field3: "h",
                        need: 1
                    };
                    var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
                    obj2.field1 = returnObj.field1
                    obj2.field2 = returnObj.field2
                    obj2.field3 = returnObj.field3
                    obj2.need = returnObj.need - 1/returnObj.field3
                    var serialObj = JSON.stringify(obj2);  
                    localStorage.setItem("Space Station"+4, serialObj)
                }        
             
    }
    
}

class SpaceStation extends Body{  
    Report(){
        var to = document.querySelector(".subtitle").textContent          
        var i = 1
        while(i){
            try{
                var returnObj = JSON.parse(localStorage.getItem(to+String(i)))                    
                var del1 = document.getElementById(to+returnObj.field1)
                var del2 = document.getElementById(to+returnObj.field2)
                var del3 = document.getElementById(to+returnObj.field3)

                del1.remove()  
                del2.remove()  
                del3.remove()
            }
            catch(e){
                break
                
            }
        i++
        }
        var j =1
        var pointStorage = 1
        var pointGoods = 1
        var to = "Space Station"
        while(j){            
            try{
                var returnObj = JSON.parse(localStorage.getItem(to+j))
                if(returnObj.field1==j & returnObj.need>0.3){
                   
                    document.getElementById(String(returnObj.field1)).innerHTML = '<th id="'+to+returnObj.field1+ '" scope'+'='+'"row">'+returnObj.field1 + '</th>'+ '<td id="'+to+returnObj.field2+'">' + returnObj.field2 + '</td><td id="'+to+returnObj.field3+'">' + returnObj.field3 + '</td></tr>'  
                }
            }
            catch(e){
                
                pointStorage = j
                pointGoods = j
                break
            }
            j++
        }
    }
    report(){
        return document.getElementById('report3').addEventListener('click', this.Report)
    }
    Begin(){
        
        var subtitle = document.querySelector('.subtitle')
        var id = document.querySelector('.label-id-shop')
        var name = document.querySelector('.label-name-shop')
        var adress = document.querySelector('.label-adress-shop')
        var Tid = document.querySelector('.table1')
        var Tname = document.querySelector('.table2')
        var Tadress = document.querySelector('.table3')
        subtitle.innerHTML = "Space Station"
        id.innerHTML = "Number"
        name.innerHTML = "Name"
        adress.innerHTML = "Capacity"
        Tid.innerHTML = "Number"
        Tname.innerHTML = "Name"
        Tadress.innerHTML = "Capacity"

        var j =1
        var pointStorage = 1
        var pointGoods = 1
        var to = "Space Station"
        while(j){
            
            try{
                var returnObj = JSON.parse(localStorage.getItem(to+j))
                if(returnObj.field1==j){
                    
                    document.getElementById(String(returnObj.field1)).innerHTML = '<th id="'+to+returnObj.field1+ '" scope'+'='+'"row">'+returnObj.field1 + '</th>'+ '<td id="'+to+returnObj.field2+'">' + returnObj.field2 + '</td><td id="'+to+returnObj.field3+'">' + returnObj.field3 + '</td></tr>'  
                }
            }
            catch(e){
                
                pointStorage = j
                pointGoods = j
                break
            }
            j++
        }
    }
      
    pusher(){
        return document.getElementById('create').addEventListener('click', this.Push)
    }
   
    deleter(){
        return document.getElementById('delete').addEventListener('click', this.Delete)
    }

    beginer(){
        return document.getElementById('spaceStation').addEventListener('click', this.Begin)  
    }

    searcher(){

        return document.getElementById('search').addEventListener('click', this.Search)
    }
    deleterAll(){
        
        return document.getElementById("spaceStation").addEventListener('click', this.DeleteAll)
    }
}

class Planet extends Body{     
    Begin(){
        var subtitle = document.querySelector('.subtitle')
        var id = document.querySelector('.label-id-shop')
        var name = document.querySelector('.label-name-shop')
        var adress = document.querySelector('.label-adress-shop')
        var Tid = document.querySelector('.table1')
        var Tname = document.querySelector('.table2')
        var Tadress = document.querySelector('.table3')
        subtitle.innerHTML = "Planet"
        id.innerHTML = "Number"
        name.innerHTML = "Name"
        adress.innerHTML = "Capacity"
        Tid.innerHTML = "Number"
        Tname.innerHTML = "Name"
        Tadress.innerHTML = "Capacity"

        var j =1
        var pointStorage = 1
        var pointGoods = 1
        var to = "Planet"
        while(j){           
            try{
                var returnObj = JSON.parse(localStorage.getItem(to+j))
                if(returnObj.field1==j){
                    
                    document.getElementById(String(returnObj.field1)).innerHTML = '<th id="'+to+returnObj.field1+ '" scope'+'='+'"row">'+returnObj.field1 + '</th>'+ '<td id="'+to+returnObj.field2+'">' + returnObj.field2 + '</td><td id="'+to+returnObj.field3+'">' + returnObj.field3 + '</td></tr>'  
                }
            }
            catch(e){
                
                pointStorage = j
                pointGoods = j
                break
            }
            j++
        }             
    }
    
    pusher(){
        return document.getElementById('create').addEventListener('click', this.Push)
    }

    deleter(){
        return document.getElementById('delete').addEventListener('click', this.Delete)
    }

    beginer(){
        return document.getElementById('planet').addEventListener('click', this.Begin)
    }
    
    searcher(){
        return document.getElementById('search').addEventListener('click', this.Search)
    }

    se(){
        return document.getElementById('search').addEventListener('click', this.Se)  
    }
    deleterAll(){
        
        return document.getElementById("planet").addEventListener('click', this.DeleteAll)
    }  
}

class Cargo extends Body{   
    CargoToStation(){
        var sb = document.querySelector('.subtitle')

        var icode = (document.getElementById("validationCustom04").value)
        var iname = (document.getElementById("validationCustom01").value)
        var im = (document.getElementById("validationCustom02").value)
        var station_name = document.getElementById("transferToStationInput").value
        var obj = {
            code: 1,
            name: 1,
            mass: "h",
            cargo: ""
        };
        obj.code = icode
        obj.name = station_name
        obj.cargo = iname
        obj.mass = im
        
        var serialObj = JSON.stringify(obj); 
        localStorage.setItem("transferToStation"+icode, serialObj)  
      
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
            if(returnObj.field2 == station_name){
               
                var obj2 = {
                    field1: 1,
                    field2: 1,
                    field3: "h",
                    need: 1
                };
                var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
                obj2.field1 = returnObj.field1
                obj2.field2 = returnObj.field2
                obj2.field3 = returnObj.field3
                obj2.need = returnObj.need - 1/returnObj.field3
                var serialObj = JSON.stringify(obj2);  
                localStorage.setItem("Space Station"+1, serialObj)
            } 
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
                if(returnObj.field2 == station_name){
                    
                    var obj2 = {
                        field1: 1,
                        field2: 1,
                        field3: "h",
                        need: 1
                    };
                    var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
                    obj2.field1 = returnObj.field1
                    obj2.field2 = returnObj.field2
                    obj2.field3 = returnObj.field3
                    obj2.need = returnObj.need - 1/returnObj.field3
                    var serialObj = JSON.stringify(obj2);  
                    localStorage.setItem("Space Station"+2, serialObj)
                } 
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
        if(returnObj.field2 == station_name){
            
            var obj2 = {
                field1: 1,
                field2: 1,
                field3: "h",
                need: 1
            };
            var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
            obj2.field1 = returnObj.field1
            obj2.field2 = returnObj.field2
            obj2.field3 = returnObj.field3
            obj2.need = returnObj.need - 1/returnObj.field3
            var serialObj = JSON.stringify(obj2);  
            localStorage.setItem("Space Station"+3, serialObj)
        }  
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
                if(returnObj.field2 == station_name){
                  
                    var obj2 = {
                        field1: 1,
                        field2: 1,
                        field3: "h",
                        need: 1
                    };
                    var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
                    obj2.field1 = returnObj.field1
                    obj2.field2 = returnObj.field2
                    obj2.field3 = returnObj.field3
                    obj2.need = returnObj.need - 1/returnObj.field3
                    var serialObj = JSON.stringify(obj2);  
                    localStorage.setItem("Space Station"+4, serialObj)
                }                    
    } 

    pusherCargoToStation(){

        return document.getElementById('transferToStationbtn').addEventListener('click', this.CargoToStation)
    }

    CargoToPlanet(){
        var sb = document.querySelector('.subtitle')

        var icode = (document.getElementById("validationCustom04").value)
        var iname = (document.getElementById("validationCustom01").value)
        var im = (document.getElementById("validationCustom02").value)
        var station_name = document.getElementById("transferToStationInput").value
       
        var obj = {
            code: 1,
            name: 1,
            mass: "h",
            cargo: ""
        };
        obj.code = icode
        obj.name = station_name
        obj.cargo = iname
        obj.mass = im
        
        var serialObj = JSON.stringify(obj); 
        localStorage.setItem("transferToPlanet"+icode, serialObj)
    }  
    pusherCargoToPlanet(){

      return document.getElementById('transferToPlanetbtn').addEventListener('click', this.CargoToPlanet)
    }

    Begin(){
        var subtitle = document.querySelector('.subtitle')
        var number = document.querySelector('.label-id-shop')
        var shop = document.querySelector('.label-name-shop')
        var capacity = document.querySelector('.label-adress-shop')
        var Tnumber = document.querySelector('.table1')
        var Tshop = document.querySelector('.table2')
        var Tcapacity = document.querySelector('.table3')

        subtitle.innerHTML = "Cargo"
        number.innerHTML = "Number"
        shop.innerHTML = "Name"
        capacity.innerHTML = "Mass"
        Tnumber.innerHTML = "Number"
        Tshop.innerHTML = "Name"
        Tcapacity.innerHTML = "Mass"
        var j = 1
        var to = "Cargo"
        while(j){          
            try{
                var returnObj = JSON.parse(localStorage.getItem(to+j))
                if(returnObj.field1==j){
                    
                    document.getElementById(String(returnObj.field1)).innerHTML = '<th id="'+to+returnObj.field1+ '" scope'+'='+'"row">'+returnObj.field1 + '</th>'+ '<td id="'+to+returnObj.field2+'">' + returnObj.field2 + '</td><td id="'+to+returnObj.field3+'">' + returnObj.field3 + '</td></tr>'  
                }
            }
            catch(e){
                
                break
            }
            j++
        }       
    }
    
    pusher(){
        return document.getElementById('create').addEventListener('click', this.Push)
    }

    deleter(){
        return document.getElementById('delete').addEventListener('click', this.Delete)
    }

    beginer(){
        return document.getElementById('cargo').addEventListener('click', this.Begin)
    }
    
    searcher(){
        return document.getElementById('search').addEventListener('click', this.Search)
    }

    se(){
        return document.getElementById('search').addEventListener('click', this.Se)  
    }

    deleterAll(){
        
        return document.getElementById("cargo").addEventListener('click', this.DeleteAll)
    }

    reporter(){
        return document.getElementById('report').addEventListener('click', this.Report)
    }

    report2(){
        return document.getElementById('report2').addEventListener('click', this.Report2)
    }
}

class CargoOnStation extends Body{
    GoodsFromSrorageToStorage(){      
        var to = "transferToStation"      
        var obj = {
            code: 1,
            name: "name",
            cargo: 1
            
        };
        var inumber = (document.getElementById("validationCustom04").value)
        var iname = (document.getElementById("validationCustom01").value)
        var icargo = (document.getElementById("validationCustom02").value)
        var station_name = document.getElementById("transferToStationInput").value

        obj.code = inumber
        obj.name = station_name
        obj.cargo = icargo           
        var serialObj = JSON.stringify(obj); 

        localStorage.setItem(to+String(inumber), serialObj);
        var returnObj = JSON.parse(localStorage.getItem(to+String(inumber) ))
        document.getElementById(String(inumber)).innerHTML = '<th id="'+to+obj.code+ '" scope'+'='+'"row">'+returnObj.code + '</th>'+ '<td id="'+to+obj.name+'">' + obj.name + '</td><td id="'+to+obj.cargo+'">' + obj.cargo + '</td></tr>'     
         
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
        if(returnObj.field2 == station_name){
            
            var obj2 = {
                field1: 1,
                field2: 1,
                field3: "h",
                need: 1
            };
            var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
            obj2.field1 = returnObj.field1
            obj2.field2 = returnObj.field2
            obj2.field3 = returnObj.field3
            obj2.need = returnObj.need - 1/returnObj.field3
            var serialObj = JSON.stringify(obj2);  
            localStorage.setItem("Space Station"+1, serialObj)
        } 
    var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
            if(returnObj.field2 == station_name){               
                var obj2 = {
                    field1: 1,
                    field2: 1,
                    field3: "h",
                    need: 1
                };

                var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
                obj2.field1 = returnObj.field1
                obj2.field2 = returnObj.field2
                obj2.field3 = returnObj.field3
                obj2.need = returnObj.need - 1/returnObj.field3
                var serialObj = JSON.stringify(obj2);  
                localStorage.setItem("Space Station"+2, serialObj)
            } 
    var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
    if(returnObj.field2 == station_name){      
        var obj2 = {
            field1: 1,
            field2: 1,
            field3: "h",
            need: 1
        };
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
        obj2.field1 = returnObj.field1
        obj2.field2 = returnObj.field2
        obj2.field3 = returnObj.field3
        obj2.need = returnObj.need - 1/returnObj.field3
        var serialObj = JSON.stringify(obj2);  
        localStorage.setItem("Space Station"+3, serialObj)
    }  
    var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
            if(returnObj.field2 == station_name){
               
                var obj2 = {
                    field1: 1,
                    field2: 1,
                    field3: "h",
                    need: 1
                };
                var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
                obj2.field1 = returnObj.field1
                obj2.field2 = returnObj.field2
                obj2.field3 = returnObj.field3
                obj2.need = returnObj.need - 1/returnObj.field3
                var serialObj = JSON.stringify(obj2);  
                localStorage.setItem("Space Station"+4, serialObj)
            } 
            
            var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
        if(returnObj.field2 == iname){
            
            var obj2 = {
                field1: 1,
                field2: 1,
                field3: "h",
                need: 1
            };
            var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
            obj2.field1 = returnObj.field1
            obj2.field2 = returnObj.field2
            obj2.field3 = returnObj.field3
            obj2.need = returnObj.need + 1/returnObj.field3
            var serialObj = JSON.stringify(obj2);  
            localStorage.setItem("Space Station"+1, serialObj)
        } 
    var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
        if(returnObj.field2 == iname){
            
            var obj2 = {
                field1: 1,
                field2: 1,
                field3: "h",
                need: 1
            };
            var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
            obj2.field1 = returnObj.field1
            obj2.field2 = returnObj.field2
            obj2.field3 = returnObj.field3
            obj2.need = returnObj.need + 1/returnObj.field3
            var serialObj = JSON.stringify(obj2);  
            localStorage.setItem("Space Station"+2, serialObj)
        } 

    var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
    if(returnObj.field2 == iname){
      
        var obj2 = {
            field1: 1,
            field2: 1,
            field3: "h",
            need: 1
        };
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
        obj2.field1 = returnObj.field1
        obj2.field2 = returnObj.field2
        obj2.field3 = returnObj.field3
        obj2.need = returnObj.need + 1/returnObj.field3
        var serialObj = JSON.stringify(obj2);  
        localStorage.setItem("Space Station"+3, serialObj)
    }  
    var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
        if(returnObj.field2 == iname){
        
            var obj2 = {
                field1: 1,
                field2: 1,
                field3: "h",
                need: 1
            };
            var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
            obj2.field1 = returnObj.field1
            obj2.field2 = returnObj.field2
            obj2.field3 = returnObj.field3
            obj2.need = returnObj.need + 1/returnObj.field3
            var serialObj = JSON.stringify(obj2);  
            localStorage.setItem("Space Station"+4, serialObj)
        }   
                 
    }  

    pusherGoodsFromSrorageToStorage(){
        return document.getElementById('report').addEventListener('click', this.GoodsFromSrorageToStorage)
    }

    Begin(){
        var subtitle = document.querySelector('.subtitle')
        var id = document.querySelector('.label-id-shop')
        var storage = document.querySelector('.label-name-shop')
        var goods = document.querySelector('.label-adress-shop')
        var Tid = document.querySelector('.table1')
        var Tstorage = document.querySelector('.table2')
        var Tgoods = document.querySelector('.table3')

        subtitle.innerHTML = "Cargo On Station"
        id.innerHTML = "Id"
        storage.innerHTML = "Space Station"
        goods.innerHTML = "Cargo"
        Tid.innerHTML = "Id"
        Tstorage.innerHTML = "Space Station"
        Tgoods.innerHTML = "Cargo"
       
        var j =1
        while(j){
            var returnObj = JSON.parse(localStorage.getItem("transferToStation"+j))
            try{
                if(returnObj.code==j){
                    document.getElementById(String(j)).innerHTML = '<th id="transferToStation'+returnObj.code+ '" scope'+'='+'"row">'+returnObj.code + '</th>'+ '<td id="transferToStation'+returnObj.name+'">' + returnObj.name + '</td>' + '<td id="transferToStation'+returnObj.cargo+'">' + returnObj.cargo + '</td>'  
                }
            }
            catch(e){            
                break
            }
            j++
        }     
    }  
    
    pusher(){
        return document.getElementById('create').addEventListener('click', this.Push)
    }

    deleter(){
        return document.getElementById('delete').addEventListener('click', this.Delete)
    }

    beginer(){  
        return document.getElementById('cargoOnStation').addEventListener('click', this.Begin)
    }

    searcher(){
        return document.getElementById('search').addEventListener('click', this.Search)
    }

    deleterAll(){    
        return document.getElementById("cargoOnStation").addEventListener('click', this.DeleteAll)
    }
  
}

class CargoOnPlanet extends Body{
    CargoToStationFromPlanet(){
        var icode = (document.getElementById("validationCustom04").value)
        var iname = (document.getElementById("validationCustom01").value)
        var im = (document.getElementById("validationCustom02").value)
        var station_name = document.getElementById("transferToStationInput").value
        var iId = (document.getElementById("idd").value)
        var obj = {
            code: 1,
            name: 1,
            mass: "h",
            cargo: ""
        };
        obj.code = iId
        obj.name = station_name
        obj.cargo = im
          
        var serialObj = JSON.stringify(obj); 
        localStorage.setItem("transferToStation"+iId, serialObj)
        
        var returnObj = JSON.parse(localStorage.getItem("transferToPlanet"+String(icode)))     
        localStorage.removeItem("transferToPlanet"+String(icode));               
        var del1 = document.getElementById("transferToPlanet"+returnObj.code)
        var del2 = document.getElementById("transferToPlanet"+returnObj.name)
        var del3 = document.getElementById("transferToPlanet"+returnObj.cargo)
        del1.remove()  
        del2.remove()  
        del3.remove()

        var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
        if(returnObj.field2 == station_name){          
            var obj2 = {
                field1: 1,
                field2: 1,
                field3: "h",
                need: 1
            };
            var returnObj = JSON.parse(localStorage.getItem("Space Station"+1))
            obj2.field1 = returnObj.field1
            obj2.field2 = returnObj.field2
            obj2.field3 = returnObj.field3
            obj2.need = returnObj.need - 1/returnObj.field3
            var serialObj = JSON.stringify(obj2);  
            localStorage.setItem("Space Station"+1, serialObj)
        } 
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
        if(returnObj.field2 == station_name){
        
            var obj2 = {
                field1: 1,
                field2: 1,
                field3: "h",
                need: 1
            };
            var returnObj = JSON.parse(localStorage.getItem("Space Station"+2))
            obj2.field1 = returnObj.field1
            obj2.field2 = returnObj.field2
            obj2.field3 = returnObj.field3
            obj2.need = returnObj.need - 1/returnObj.field3
            var serialObj = JSON.stringify(obj2);  
            localStorage.setItem("Space Station"+2, serialObj)
        } 

    var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
    if(returnObj.field2 == station_name){
        
        var obj2 = {
            field1: 1,
            field2: 1,
            field3: "h",
            need: 1
        };
        var returnObj = JSON.parse(localStorage.getItem("Space Station"+3))
        obj2.field1 = returnObj.field1
        obj2.field2 = returnObj.field2
        obj2.field3 = returnObj.field3
        obj2.need = returnObj.need - 1/returnObj.field3
        var serialObj = JSON.stringify(obj2);  
        localStorage.setItem("Space Station"+3, serialObj)
    }  
    var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
            if(returnObj.field2 == station_name){
               
                var obj2 = {
                    field1: 1,
                    field2: 1,
                    field3: "h",
                    need: 1
                };
                var returnObj = JSON.parse(localStorage.getItem("Space Station"+4))
                obj2.field1 = returnObj.field1
                obj2.field2 = returnObj.field2
                obj2.field3 = returnObj.field3
                obj2.need = returnObj.need - 1/returnObj.field3
                var serialObj = JSON.stringify(obj2);  
                localStorage.setItem("Space Station"+4, serialObj)
            }   
                 
    }  

    pusherCargoToStationFromPlanet(){

        return document.getElementById('report2').addEventListener('click', this.CargoToStationFromPlanet)
    }

    Begin(){
        var subtitle = document.querySelector('.subtitle')
        var id = document.querySelector('.label-id-shop')
        var storage = document.querySelector('.label-name-shop')
        var goods = document.querySelector('.label-adress-shop')
        var Tid = document.querySelector('.table1')
        var Tstorage = document.querySelector('.table2')
        var Tgoods = document.querySelector('.table3')

        subtitle.innerHTML = "Cargo On Planet"
        id.innerHTML = "Id"
        storage.innerHTML = "Planet"
        goods.innerHTML = "Cargo"
        Tid.innerHTML = "Id"
        Tstorage.innerHTML = "Planet"
        Tgoods.innerHTML = "Cargo"
           
        var j = 1
        while(j){
            var returnObj = JSON.parse(localStorage.getItem("transferToPlanet"+j))         
            try{
                if(returnObj.code==j){
                    document.getElementById(String(j)).innerHTML = '<th id="transferToPlanet'+returnObj.code+ '" scope'+'='+'"row">'+returnObj.code + '</th>'+ '<td id="transferToPlanet'+returnObj.name+'">' + returnObj.name + '</td>' + '<td id="transferToPlanet'+returnObj.cargo+'">' + returnObj.cargo + '</td>'  
                    j++
                }
            }
            catch(e){  
                break        
            }
        }       
    }  
    
    pusher(){
        return document.getElementById('create').addEventListener('click', this.Push)
    }

    deleter(){
        return document.getElementById('delete').addEventListener('click', this.Delete)

    }

    beginer(){  
        return document.getElementById('cargoOnPlanet').addEventListener('click', this.Begin)  
    }

   searcher(){

    return document.getElementById('search').addEventListener('click', this.Search)
   }

   se(){
    return document.getElementById('search').addEventListener('click', this.Se)
   }

   deleterAll(){    
        return document.getElementById("cargoOnPlanet").addEventListener('click', this.DeleteAll)
    }
}

let spaceStation = new SpaceStation()
spaceStation.deleterAll()
spaceStation.beginer()
spaceStation.pusher()
spaceStation.searcher()
spaceStation.deleter()
spaceStation.report()

let planet = new Planet()
planet.deleterAll()
planet.beginer()
planet.pusher()
planet.searcher()
planet.deleter()

let cargo = new Cargo()
cargo.deleterAll()
cargo.beginer()
cargo.pusher()
cargo.searcher()
cargo.deleter()
cargo.pusherCargoToStation()
cargo.pusherCargoToPlanet()

let cargoOnStation = new CargoOnStation()
cargoOnStation.deleterAll()
cargoOnStation.beginer()
cargoOnStation.pusherGoodsFromSrorageToStorage()

let cargoOnPlanet = new CargoOnPlanet()
cargoOnPlanet.deleterAll()
cargoOnPlanet.beginer()
cargoOnPlanet.pusherCargoToStationFromPlanet()

