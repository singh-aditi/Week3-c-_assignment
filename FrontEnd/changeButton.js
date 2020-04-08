import { obj } from "./employeeTable.js";
export class change {
    changeButton() {
        console.log('inside change fn');
        let rInd = event.target.parentNode.parentNode.rowIndex;
        var x = document.getElementById("tbl1").rows[rInd].cells;
        if (obj.flag == 0) {
            document.getElementById("tbl1").rows[rInd].cells[8].lastChild.value = "Cancel";
            document.getElementById("tbl1").rows[rInd].cells[8].firstChild.value = "Save";
            obj.flag = 1;
            var restOfButton = document.getElementsByClassName('edit');
            for (var i = 0; i < restOfButton.length; i++) {
                var element = restOfButton.item(i);
                if (element.getAttribute('value') === 'Edit') {
                    element.setAttribute("disabled", "true");
                }
            }
        }
        else {
            if (obj.flag == 1) {
                document.getElementById("tbl1").rows[rInd].cells[8].lastChild.value = "Delete";
                document.getElementById("tbl1").rows[rInd].cells[8].firstChild.value = "Edit";
                obj.flag = 0;
                console.log("Enable");
                console.log(document.getElementById("tbl1").rows[rInd].cells[7]);
                var restOfButton = document.getElementsByClassName('edit');
                for (var i = 0; i < restOfButton.length; i++) {
                    let element = restOfButton.item(i);
                    element.removeAttribute("disabled");
                }
            }
            else {
                console.log(document.getElementById("tbl1").rows[rInd].cells[8]);
                document.getElementById("tbl1").rows[rInd].cells[8].lastChild.value = "Delete";
                document.getElementById("tbl1").rows[rInd].cells[8].firstChild.value = "Edit";
                obj.flag = 0;
                console.log("Enable");
                console.log(document.getElementById("tbl1").rows[rInd].cells[7]);
                var restOfButton = document.getElementsByClassName('edit');
                for (var i = 0; i < restOfButton.length; i++) {
                    let element = restOfButton.item(i);
                    element.removeAttribute("disabled");
                }
            }
        }
    }
}
