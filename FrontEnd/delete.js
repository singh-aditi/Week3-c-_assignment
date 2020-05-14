import { obj } from "./employeeTable.js";
import { change } from "./changeButton.js";
export class deleteEmployee {
    constructor() {
        this.objChange = new change();
    }
    deleteFunc() {
        let rInd = event.target.parentNode.parentNode.rowIndex;
        let id = document.getElementById('tbl1').rows[rInd].id;
        if (obj.flag == 0) {
            console.log(rInd);
            fetch(`http://localhost:3000/EmployeeTable/${id}`, { method: 'delete' }).then(() => {
                document.getElementById('tbl1').deleteRow(rInd);
            });
        }
        else {
            let rInd = event.target.parentNode.parentNode.rowIndex;
            let x = document.getElementById("tbl1").rows[rInd].cells;
            //Cancel
            console.log("inside cancel");
            x[0].innerHTML = obj.firstName_data;
            x[1].innerHTML = obj.middleName_data;
            x[2].innerHTML = obj.lastName_data;
            x[3].innerHTML = obj.email_data;
            x[4].innerHTML = obj.phoneNo_data;
            x[5].innerHTML = obj.role_data;
            x[6].innerHTML = obj.address_data;
            let count = 0;
            for (let i = 0; i < 7; i++) {
                if (x[i].innerHTML) {
                    count++;
                    break;
                }
            }
            if (count === 0) {
                let rInd = event.target.parentNode.parentNode.rowIndex;
                console.log(rInd);
                fetch(`http://localhost:3000/EmployeeTable/${rInd}`, { method: 'delete' }).then(() => {
                    document.getElementById('tbl1').deleteRow(rInd);
                });
            }
            this.objChange.changeButton();
        }
    }
}
