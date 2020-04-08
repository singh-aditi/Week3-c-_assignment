import { obj } from "./employeeTable.js";
export class tableHeading {
    //creation of heading starts
    heading(Employee) {
        console.log("ftygyuhj", Object.keys(Employee[0]));
        var header = document.createElement('thead');
        header.className = "thead-dark";
        var headingRow = document.createElement('tr');
        console.log("ftygyuhj", Object.keys(Employee[0]));
        let objLen = Object.keys(Employee[0]).length;
        console.log("the length of the object is ...", objLen);
        for (let j = 0; j < objLen - 1; j++) {
            let employeeArray = Object.keys(Employee[0]);
            var headingCell = document.createElement('td');
            var headingText;
            if (employeeArray[j] == "role_id") {
                headingText = document.createTextNode("role");
            }
            else if (employeeArray[j] == "id") {
                headingText = document.createTextNode("Company Name");
            }
            else if (employeeArray[j] == "name") {
                headingText = document.createTextNode("Operation");
            }
            else if (employeeArray[j] == "role_name") {
                headingText = document.createTextNode("Delete");
            }
            else {
                headingText = document.createTextNode(employeeArray[j]);
            }
            headingCell.style.fontWeight = "bold";
            headingCell.style.backgroundColor = "green";
            headingCell.appendChild(headingText);
            headingRow.appendChild(headingCell);
        }
        header.appendChild(headingRow);
        obj.tbl.appendChild(header);
        //creation of heading ends
    }
}
