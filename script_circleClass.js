class circleClass{
    constructor(){
        this.color = 'red'
        this.radius = 1.0
    }
    circle(){

    }
    circle(radius){
       
    }
    circle(radius, color){

    }
    getRadius(){
        return this.radius
    }
    setRadius(radius){
        radius = 2.0
    }
    getColor(){
       return this.color
    }
    setColor(color){
        color = 'blue'
    }
    toString(){
        return this.color
    }
    getArea(){
        return 3.14*((this.radius)**2)
    }
    getCircumference(){
        return 2*3.14*this.radius
    }

}