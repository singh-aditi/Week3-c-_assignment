import {obj } from "./employeeTable.js"
import { checkBox } from './checkBox.js'
let objCheck = new checkBox();
import { button } from './button.js';
let objButton = new button();
export class add{
    addRowFunc()
        {
            let tblBody = document.getElementById("table-body")!;
            let row = document.createElement("tr");
            row.id = "new";
            tblBody.appendChild(row);
            let cell = document.createElement("td");
            for (let i = 0; i < 8; i++) {
                cell = document.createElement("td");
                row.appendChild(cell);
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
            //checkbox
            cell = document.createElement("td");
            let checkButton = objCheck.check(-1);
            cell.appendChild(checkButton);
            row.appendChild(cell);
            //checkbox ends
    
            edit.click();
        }
    
}