import { obj } from "./employeeTable.js";
import { change } from "./changeButton.js";
import { Validation } from "./Validation.js";
let objValidation = new Validation();
export class editEmployee {
    constructor() {
        this.objChange = new change();
    }
    editFunc() {
        let rInd = event.target.parentNode.parentNode.rowIndex;
        let x = document.getElementById("tbl1").rows[rInd].cells;
        if (obj.flag == 0) {
            obj.firstName_data = x[0].innerHTML;
            obj.middleName_data = x[1].innerHTML;
            obj.lastName_data = x[2].innerHTML;
            obj.email_data = x[3].innerHTML;
            obj.phoneNo_data = x[4].innerHTML;
            obj.role_data = x[5].innerHTML;
            obj.address_data = x[6].innerHTML;
            obj.name_data = x[7].innerHTML;
            let tbl_bdy = document.getElementsByTagName("tbody")[0];
            obj.storedbody = tbl_bdy.cloneNode(true);
            x[0].innerHTML = "<input type='text' id='firstName_text" + rInd + "' value='" + obj.firstName_data + "'>";
            x[1].innerHTML = "<input type='text' id='middleName_text" + rInd + "' value='" + obj.middleName_data + "'>";
            x[2].innerHTML = "<input type='text' id='lastName_text" + rInd + "' value='" + obj.lastName_data + "'>";
            x[3].innerHTML = "<input type='email' id='email_text" + rInd + "' value='" + obj.email_data + "'>";
            x[4].innerHTML = "<input type='text' id='phoneNo_text" + rInd + "' value='" + obj.phoneNo_data + "'>";
            x[5].innerHTML = "<input type='text' id='role_text" + rInd + "' value='";
            {
                obj.selectList = document.createElement("select");
                obj.selectList.id = "mySelect";
                x[5].appendChild(obj.selectList);
                obj.loadRole();
            }
            "'>";
            x[6].innerHTML = "<input type='text' id='address_text" + rInd + "' value='" + obj.address_data + "'>";
            x[7].innerHTML = "<input type='text' id='name_text" + rInd + "'value='";
            {
                obj.customerList = document.createElement("select");
                obj.customerList.id = "custList";
                x[7].appendChild(obj.customerList);
                obj.loadCustomer();
            }
            "'>";
            //customer column ends
            console.log("After change button", obj);
            console.log(this);
            this.objChange.changeButton();
        }
        else {
            //saving
            console.log('inside save');
            let sendVal = document.getElementById("tbl1").rows[rInd].cells[3].firstChild.value;
            let sendVal2 = document.getElementById("tbl1").rows[rInd].cells[4].firstChild.value;
            let sendVal0 = document.getElementById("tbl1").rows[rInd].cells[0].firstChild.value;
            if (objValidation.InputValidation(sendVal0, rInd) && objValidation.ValidateEmail(sendVal, rInd) && objValidation.phonenumber(sendVal2, rInd)) {
                let sel, valRole, valCustomer;
                for (let i = 0; i < 8; i++) {
                    if (i === 5) {
                        sel = document.getElementById("tbl1").rows[rInd].cells[5].firstChild;
                        x[5].innerHTML = sel.options[sel.selectedIndex].text;
                        valRole = parseInt(sel.options[sel.selectedIndex].value);
                    }
                    else if (i === 7) {
                        sel = document.getElementById("tbl1").rows[rInd].cells[7].firstChild;
                        x[7].innerHTML = sel.options[sel.selectedIndex].text;
                        valCustomer = parseInt(sel.options[sel.selectedIndex].value);
                    }
                    else {
                        x[i].innerHTML = document.getElementById("tbl1").rows[rInd].cells[i].firstChild.value;
                    }
                }
                let updatedUser = {
                    firstname: x[0].innerHTML,
                    middlename: x[1].innerHTML,
                    lastname: x[2].innerHTML,
                    email: x[3].innerHTML,
                    phoneNo: x[4].innerHTML,
                    role_id: valRole,
                    address: x[6].innerHTML,
                    c_id: valCustomer,
                    id: document.getElementById('tbl1').rows[rInd].id
                };
                let row = document.getElementById("tbl1").rows[rInd];
                if (row.id == "new") {
                    fetch('http://localhost:3000/Add', {
                        method: "POST",
                        headers: {
                            'Content-type': "application/json"
                        },
                        body: JSON.stringify(updatedUser)
                    })
                        .then((res) => res.json())
                        .then((data) => {
                        row.id = data.id.toString();
                        console.log("there is row iddd");
                    });
                }
                else {
                    fetch('http://localhost:3000/Update', {
                        method: 'PUT',
                        headers: {
                            'Content-type': "application/json"
                        },
                        body: JSON.stringify(updatedUser)
                    });
                }
                this.objChange.changeButton();
            }
        }
    }
}
