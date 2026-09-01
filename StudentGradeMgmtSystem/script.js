var students=[];
document.getElementById("studentForm").onsubmit=function(event){
    event.preventDefault();
    var name=document.getElementById("studentName").value;
    var math=Number(document.getElementById("math").value);
    var science=Number(document.getElementById("science").value);
    var english=Number(document.getElementById("english").value);
    var history=Number(document.getElementById("history").value);

    if (name=="") {
        alert("Please enter student name");
        return;
    }
    if (math<0||math>100||science<0||science>100||english<0||english>100||history<0||history>100){
        alert("Marks must be between 0 and 100");
        return;
    }

    var total=math+science+english+history;
    var average=total/4;
    var grade;
    if (average>=90){
        grade="A";
    }
    else if (average>=80){
        grade="B";
    }
    else if (average>=70){
        grade="C";
    }
    else if (average>=60){
        grade="D";
    }
    else {
        grade="F";
    }

    var student={
        name:name,
        math:math,
        science:science,
        english:english,
        history:history,
        total:total,
        average:average,
        grade:grade
    };

    try{
        students.push(student);
        displayStudents();
        updateSummary();
    }
    catch (error) {
        alert("Something went wrong");
    }
    alert("Student added successfully");
    document.getElementById("studentForm").reset();
};

function displayStudents(list=students){
    var table=document.getElementById("studentTable");
    table.innerHTML="";
    list.map(function(student){
        table.innerHTML+=
            "<tr>"+
            "<td>"+student.name+"</td>"+
            "<td>"+student.math+"</td>"+
            "<td>"+student.science+"</td>"+
            "<td>"+student.english+"</td>"+
            "<td>"+student.history+"</td>"+
            "<td>"+student.total+"</td>"+
            "<td>"+student.average+"</td>"+
            "<td>"+student.grade+"</td>"+
           "<td><button class='btn btn-danger rounded-3 btn-sm' onclick='deleteStudent("+students.indexOf(student)+")'>Delete</button></td>"+
            "</tr>";
    });
}

function deleteStudent(index){
    students.splice(index,1);
    displayStudents();
    updateSummary();
}

function filterStudents(grade){
    if (grade=="All") {
        displayStudents();
        return;
    }
    var result=students.filter(function(student) {
        return student.grade==grade;
    });
    displayStudents(result);
}

function updateSummary() {
    document.getElementById("totalStudents").innerText=students.length;
    if (students.length==0){
        return;
    }
    var total=students.reduce(function(sum,student){
        return sum+student.total;
    },0);

    var average=total/(students.length*4);

    var highest=students.reduce(function(max,student){
        return Math.max(max,student.total);
    },students[0].total);

    var lowest=students.reduce(function(min,student) {
        return Math.min(min,student.total);
    },students[0].total);

    document.getElementById("classAverage").innerText=average;
    document.getElementById("highestScore").innerText=highest;
    document.getElementById("lowestScore").innerText=lowest;
}

function exportData() {
    var data=JSON.stringify(students);
    var file=new Blob([data],{type:"application/json"});
    var link=document.createElement("a");
    link.href=URL.createObjectURL(file);
    link.download="students.json";
    link.click();
}