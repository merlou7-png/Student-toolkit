var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Teacher"] = "Teacher";
    UserRole["Student"] = "Student";
})(UserRole || (UserRole = {}));
function getUserInfo(user) {
    switch (user.role) {
        case UserRole.Admin:
            return "Admin user: ".concat(user.name);
        case UserRole.Teacher:
            return "Teacher user: ".concat(user.name);
        case UserRole.Student:
            return "Student user: ".concat(user.name);
        default:
            return "User: ".concat(user.name);
    }
}
function logAction(action, userId) {
    var target = userId ? "ID ".concat(userId) : "System";
    console.log("".concat(target, ": ").concat(action));
}
function getStatus(status) {
    if (status === void 0) { status = "Active"; }
    return "Status: ".concat(status);
}
var users = [
    { id: 1, name: "Alice", role: UserRole.Admin },
    { id: "u2", name: "Bob", role: UserRole.Teacher },
    { id: 3, name: "Charlie", role: UserRole.Student }
];
console.log("--- All Users ---");
users.forEach(function (u) { return console.log(getUserInfo(u)); });
console.log("--- Filtered (Teachers) ---");
var teachersOnly = users.filter(function (u) { return u.role === UserRole.Teacher; });
console.log(teachersOnly);
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("Course \"".concat(course.title, "\" added."));
    };
    CourseManager.prototype.removeCourse = function (id) {
        this.courses = this.courses.filter(function (c) { return c.id !== id; });
        console.log("Course with ID ".concat(id, " removed."));
    };
    CourseManager.prototype.listCourses = function () {
        return this.courses;
    };
    return CourseManager;
}());
var manager = new CourseManager();
manager.addCourse({ id: 101, title: "TypeScript Fundamentals" });
manager.addCourse({ id: 102, title: "Advanced React" });
console.log("Current courses:", manager.listCourses());
logAction("System started");
logAction("User logged in", 1);
console.log(getStatus());
/*
--- All Users ---
main.js:32
Admin user: Alice
main.js:33
Teacher user: Bob
main.js:33
Student user: Charlie
main.js:33
--- Filtered (Teachers) ---
main.js:34
(1) [{…}]
main.js:36
Course "TypeScript Fundamentals" added.
main.js:43
Course "Advanced React" added.
main.js:43
Current courses: (2) [{…}, {…}]
main.js:57
System: System started
main.js:21
ID 1: User logged in
main.js:21
Status: Active
/*
