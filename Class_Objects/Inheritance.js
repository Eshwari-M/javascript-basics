class Shape{
    constructor(area){
        this.area=area;
    }
    displayArea(){
        console.log('Area:${this.area}');
    }
}
class Circle extends Shape{
    constructor(radius){
        super(Math.PI*radius*radius);
    }
    displayRadius(){
        console.log('Radius:${this.radius}');
    }
}
const circle=new Circle(5);
circle.displayArea();
circle.displayRadius();