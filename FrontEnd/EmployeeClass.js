export var Role;
(function (Role) {
    Role[Role["Developer"] = 0] = "Developer";
    Role[Role["DevOps"] = 1] = "DevOps";
    Role[Role["QA"] = 2] = "QA";
})(Role || (Role = {}));
export class EmployeeDetails {
}
export class UserDetails extends EmployeeDetails {
}
