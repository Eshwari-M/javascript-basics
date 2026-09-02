class Employee{
    constructor(eno,fname,lname){
        this.eno=eno;
        this.fname=fname;
        this.lname=lname;
    }
    get fullname(){
        console.log("[GETTER] Fetching the full name");
        return `${this.fname} ${this.lname}`;
    }
    set empno(newEmpno){
        console.log("[SETTER] Setting the employee number");
        this.eno=newEmpno;
    }
}
const emp1=new Employee(1001,"Anil","Kumar");
console.log(emp1.fullname);
emp1.empno=1002;
console.log(emp1.eno);