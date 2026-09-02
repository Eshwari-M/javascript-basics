class Student{
    constructor(rno,fname,lname){
        this.rno=rno;
        this.fname=fname;
        this.lname=lname;
    }
    displayinfo(){
        console.log(`Roll No: ${this.rno}, First Name: ${this.fname}, Last Name: ${this.lname}`);
    }
    static getSchool(){
        return "Ethnus";
    }
}

const s1=new Student(1,"Vuk","Markovic");
s1.displayinfo();
console.log(Student.getSchool());