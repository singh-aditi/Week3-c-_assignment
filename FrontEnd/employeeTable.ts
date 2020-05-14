import { fetchFunc } from "./BusinessLogic.js";
import { CRUD } from "./CRUD.js";
import { EmployeeDetails, Role, UserDetails } from "./EmployeeClass.js";
let objFetch = new fetchFunc();
import { tableHeading } from './heading.js';
let objHeading = new tableHeading();
import { checkBox } from './checkBox.js'
let objCheck = new checkBox();
import { button } from './button.js';
let objButton = new button();


import { add } from "./AddRow.js";
import { editEmployee } from "./edit.js"

import { deleteEmployee } from "./delete.js"

//Interface CRUD removed

export class Operation implements CRUD<UserDetails>
{
    firstName_data: string;
    middleName_data: string;
    lastName_data: string;
    email_data: string;
    phoneNo_data: string;
    role_data: string;
    address_data: string;
    c_id: number;
    name_data: string;
    flag: number;//edit delete flag=1 save cancel
    flagAdd: number;
    storedbody: any;
    tbl: HTMLTableElement;
    selectList: HTMLSelectElement;
    customerList: HTMLSelectElement;
    loadData: any;

    objAdd: add;
    objEdit: editEmployee;
    objDelete: deleteEmployee;
    constructor() {
        this.firstName_data = '';
        this.middleName_data = '';
        this.lastName_data = '';
        this.email_data = '';
        this.phoneNo_data = '';
        this.role_data = '';
        this.address_data = '';
        this.name_data = '';
        this.flag = 0;
        this.flagAdd = 0;
        this.objEdit = new editEmployee();
        this.objDelete = new deleteEmployee();
    }
    // Fetch fuction removed
    loadDataFunc() {
        console.log(this);
        objFetch.fetch1()
            .then((data) => obj.generate_table(data));
    }
    loadCustomer() {
        objFetch.fetchCustomer()
            .then((data) => {

                var option1 = document.createElement("option");
                option1.value = (data[0].c_id);
                option1.text = data[0].name;
                obj.customerList.appendChild(option1);
                var option2 = document.createElement("option");
                option2.value = data[1].c_id;
                option2.text = data[1].name;
                obj.customerList.appendChild(option2);
            });
    }
    loadRole() {
        objFetch.fetchRole()
            .then((data) => {
                var option1 = document.createElement("option");
                option1.value = data[0].role_id;
                option1.text = data[0].role_name;
                obj.selectList.appendChild(option1);
                var option2 = document.createElement("option");
                option2.value = data[1].role_id;
                option2.text = data[1].role_name;
                obj.selectList.appendChild(option2);
                var option3 = document.createElement("option");
                option3.value = data[2].role_id;
                option3.text = data[2].role_name;
                obj.selectList.appendChild(option3);
            });
    }

    generate_table(Employee: Array<UserDetails>) {
        let buttonLoad = document.getElementById("load")!;
        buttonLoad.setAttribute("value", "Refresh");
        buttonLoad.className = "loadData btn btn-primary"
        buttonLoad.style.display = "none";

        let arrlen = Employee.length;
        var body = document.getElementsByTagName("body")[0];
        body.id = 'bod';

        obj.tbl = document.createElement("table");
        obj.tbl.className = "table table-dark";
        obj.tbl.setAttribute("align", "center");
        obj.tbl.setAttribute("id", "tbl1");
        var tblBody = document.createElement("tbody");
        tblBody.id = "table-body";

        objHeading.heading(Employee);

        for (var i = 0; i < arrlen; i++) {
            // creates a table row
            let row = document.createElement("tr");
            row.id = Employee[i].id.toString();

            let employeeArray = Employee[i];
            let cell;
            //populating the table
            let z = 0;
            let objLen = Object.keys(Employee[0]).length;

            for (let [key, value] of Object.entries(employeeArray)) {
                if (z == objLen - 2) {
                    break;
                }
                else if (`${key}` == "role_id") {
                    cell = document.createElement("td");
                    let cellText: Text = document.createTextNode(Employee[i].role_name);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                else if (`${key}` == "c_id") {
                    cell = document.createElement("td");
                    let cellText: Text = document.createTextNode(Employee[i].name);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                else {
                    cell = document.createElement("td");
                    let cellText: Text = document.createTextNode(`${value}`);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                z++;
            }

            //Edit Button
            cell = document.createElement("td");
            let edit: HTMLInputElement = objButton.createButton("Edit", "edit btn btn-success");
            obj.flag = 0;
            edit.onclick = obj.editFunc;
            cell.appendChild(edit);
            row.appendChild(cell);

            //delete button begins
            let del: HTMLInputElement = objButton.createButton("Delete", "del btn btn-danger");
            del.onclick = obj.deleteFunc;
            cell.appendChild(del);

            row.appendChild(cell);
            tblBody.appendChild(row);

            //checkbox creation
            cell = document.createElement("td");
            let checkButton = objCheck.check(i);
            cell.appendChild(checkButton);
            row.appendChild(cell);

            tblBody.appendChild(row);
        }
        obj.tbl.appendChild(tblBody);
        body.appendChild(obj.tbl);

        let buttonMulti: HTMLInputElement = objButton.createButton("Multiple Delete", "loadData btn btn-primary");
        buttonMulti.onclick = obj.MultipleDelete;
        buttonMulti.id = "multiDel";
        body.appendChild(buttonMulti);

        
        let addRow : HTMLInputElement = objButton.createButton("Add Row", "add-row btn btn-primary");
        addRow.onclick = obj.addRowFunc;
        body.appendChild(addRow);


        obj.tbl.setAttribute("border", "2");
        //Refresh function 
        buttonLoad.addEventListener("click", obj.refreshFunc);
    }

    editFunc() {
        obj.objEdit.editFunc();
    }


    deleteFunc() {
        obj.objDelete.deleteFunc();
    }
    MultipleDelete() {
        let y = (document.getElementById("tbl1")! as HTMLTableElement).rows;
        console.log(y.length);
        for (let i = 0; i < (y.length) + 1; i++) {
            let x = document.getElementById("check" + i);
            console.log(x);

            if ((x as HTMLInputElement).checked == true) {
                let rInd = ((x!.parentNode as HTMLTableCellElement).parentNode as HTMLTableRowElement).rowIndex;
                console.log(x);
                //(document.getElementById('tbl1')! as HTMLTableElement).deleteRow(rInd);
                fetch(`http://localhost:3000/EmployeeTable/${rInd}`, { method: 'delete' }).then(() => {
                    (document.getElementById('tbl1')! as HTMLTableElement).deleteRow(rInd);
                });

            }

        }
    }
    refreshFunc() {
        let copy = (document.getElementById('tbl1') as HTMLTableElement);
        console.log(copy);
        (copy.parentNode as HTMLBodyElement).removeChild(copy);
        let copy2 = (document.getElementById("multiDel") as HTMLElement);
        (copy2.parentNode as HTMLBodyElement).removeChild(copy2);
    }

    addRowFunc() {
        obj.objAdd.addRowFunc();
    }
}
export let obj = new Operation();

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let button = document.getElementById('load')!;
    button.addEventListener("click", obj.loadDataFunc);
});