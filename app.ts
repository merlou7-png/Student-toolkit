var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Teacher"] = "Teacher";
    UserRole["Student"] = "Student";
})(UserRole || (UserRole = {}));
function printUserInfo(user) {
    console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Role: ").concat(user.role));
}
var users = [
    { id: 1, name: "Alice", role: UserRole.Admin },
    { id: 2, name: "Bob", role: UserRole.Teacher, age: 35 },
    { id: 3, name: "Charlie", role: UserRole.Student },
    { id: 4, name: "Diana", role: UserRole.Student, age: 20 }
];
console.log("Все пользователи:");
users.forEach(function (user) { return printUserInfo(user); });
function filterUsersByRole(usersArray, role) {
    return usersArray.filter(function (user) { return user.role === role; });
}
var students = filterUsersByRole(users, UserRole.Student);
console.log("\nСтуденты:");
students.forEach(function (s) { return printUserInfo(s); });
function updateUserProfile(id, email, status) {
    console.log("\nUpdating user ".concat(id, ":"));
    if (email)
        console.log("Email set to: ".concat(email));
    if (status)
        console.log("Status set to: ".concat(status));
    if (!email && !status)
        console.log("No changes provided.");
}
updateUserProfile(1, "admin@example.com");
updateUserProfile(2, undefined, "Active");
/*
Все пользователи:
ID: 1, Name: Alice, Role: Admin
ID: 2, Name: Bob, Role: Teacher
ID: 3, Name: Charlie, Role: Student
ID: 4, Name: Diana, Role: Student

Студенты:
ID: 3, Name: Charlie, Role: Student
ID: 4, Name: Diana, Role: Student

Updating user 1:
Email set to: admin@example.com

Updating user 2:
Status set to: Active
*/
