class customer{
    constructor(vehicle,persons,distance){

       this.vehicle = vehicle
       this.persons = persons
       this.distance = distance
       this.baseRate;
    }
    getPrice(){
        if(this.vehicle == "sedan")
        {
            this.baseRate = 100
            if(this.distance <=4 && this.persons <=2)
                return this.baseRate
            
            else if(this.distance <=4 && this.persons >2){
                return (this.baseRate + 20)
            }    
            else if (this.distance >= 4 && this.persons <=2)
                return (this.baseRate +(20*(this.distance - 4)))
                
            else if (this.distance >= 4 && this.persons >2)
                return (this.baseRate +(20*(this.distance - 4)) + 20)    
            
        }
        if(this.vehicle == "hatchback"){
            this.baseRate = 200
            if(this.distance <=4 && this.persons <=2)
                return this.baseRate
                
            else if(this.distance <=4 && this.persons >2){
                    return (this.baseRate + 20)
                }    
            else if (this.distance >= 4 && this.persons <=2)
                    return (this.baseRate +(20*(this.distance - 4)))
                    
            else if (this.distance >= 4 && this.persons >2)
                    return (this.baseRate +(20*(this.distance - 4)) + 20)    
        }
        if(this.vehicle == "mini-car"){
            this.baseRate = 50
            if(this.distance <=4 && this.persons <=2)
                return this.baseRate
                
            else if(this.distance <=4 && this.persons >2){
                    return (this.baseRate + 20)
                }    
            else if (this.distance >= 4 && this.persons <=2)
                    return (this.baseRate +(20*(this.distance - 4)))
                    
            else if (this.distance >= 4 && this.persons >2)
                    return (this.baseRate +(20*(this.distance - 4)) + 20)    
        }
        else{
            console.log("Please enter 'vechile-type','no.of persons' and 'distance'")
        }
        }
    }
var cust1 = new customer("mini-car",3,10)
console.log(`The uber Price is ${cust1.getPrice()}`)