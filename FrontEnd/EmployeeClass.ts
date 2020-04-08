export enum Role { Developer, DevOps, QA }

export class EmployeeDetails{
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phoneNo: number;
    role_name: string;
    address: string;
    c_id:number;
    id:number;
    //name:string;
}
export class UserDetails extends EmployeeDetails{
    name:string;
}