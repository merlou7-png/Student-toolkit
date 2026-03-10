var str;
var num;
var isIs;
var arr;
function avg(arr) {
    var c = 0;
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        c++;
        total += arr[i];
    }
    return total / c;
}
var person = {
    id: 34,
    name: "Maks",
    age: 17,
    grades: [90, 80, 70, 45]
};
var StudentManager = (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.newStudent = function (student) {
        this.students.push(student);
        return student;
    };
    StudentManager.prototype.getAll = function () {
        this.students.forEach(function (student) {
            console.log("ID ", student.id, "\nName: ", student.name);
        });
    };
    return StudentManager;
}());
function generic(generic) {
    console.log("data:", generic);
}
var StudentManager = new StudentManager();
StudentManager.newStudent(person);
StudentManager.getAll();
generic("345");
generic(false);

/*
PS C:\Users\VTK1\Documents\hk> tsc app.ts
PS C:\Users\VTK1\Documents\hk> node app.js
ID  34
Name:  Maks
data: 345
data: false
*/
