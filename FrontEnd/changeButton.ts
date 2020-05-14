import {obj} from "./employeeTable.js"

export class change {
   
    
    changeButton() {
        console.log('inside change fn');
        let rInd = (((event!.target as HTMLInputElement).parentNode as HTMLTableCellElement).parentNode as HTMLTableRowElement).rowIndex;
        var x = (document.getElementById("tbl1")! as HTMLTableElement).rows[rInd].cells;
        if (obj.flag == 0) {
            ((((document.getElementById("tbl1")! as HTMLTableElement).rows[rInd] as HTMLTableRowElement).cells[8] as HTMLTableCellElement).lastChild as HTMLInputElement).value = "Cancel";
            ((((document.getElementById("tbl1")! as HTMLTableElement).rows[rInd] as HTMLTableRowElement).cells[8] as HTMLTableCellElement).firstChild as HTMLInputElement).value = "Save";

            obj.flag = 1;
            var restOfButton: HTMLCollectionOf<Element> = document.getElementsByClassName('edit');
            for (var i = 0; i < restOfButton.length; i++) {

                var element = restOfButton.item(i);
                if (element!.getAttribute('value') === 'Edit') {
                    element!.setAttribute("disabled", "true");
                }

            }

        }
        else {
            if (obj.flag == 1) {
                ((((document.getElementById("tbl1")! as HTMLTableElement).rows[rInd] as HTMLTableRowElement).cells[8] as HTMLTableCellElement).lastChild as HTMLInputElement).value = "Delete";
                ((((document.getElementById("tbl1")! as HTMLTableElement).rows[rInd] as HTMLTableRowElement).cells[8] as HTMLTableCellElement).firstChild as HTMLInputElement).value = "Edit";

                obj.flag = 0;
                console.log("Enable")
                console.log((((document.getElementById("tbl1")! as HTMLTableElement).rows[rInd] as HTMLTableRowElement).cells[7] as HTMLTableCellElement));
                var restOfButton = document.getElementsByClassName('edit');
                for (var i = 0; i < restOfButton.length; i++) {
                    let element = restOfButton.item(i)
                    element!.removeAttribute("disabled");
                }
            }
            else {
                console.log((((document.getElementById("tbl1")! as HTMLTableElement).rows[rInd] as HTMLTableRowElement).cells[8] as HTMLTableCellElement));
                ((((document.getElementById("tbl1")! as HTMLTableElement).rows[rInd] as HTMLTableRowElement).cells[8] as HTMLTableCellElement).lastChild as HTMLInputElement).value = "Delete";
                ((((document.getElementById("tbl1")! as HTMLTableElement).rows[rInd] as HTMLTableRowElement).cells[8] as HTMLTableCellElement).firstChild as HTMLInputElement).value = "Edit";

                obj.flag = 0;
                console.log("Enable")
                console.log((((document.getElementById("tbl1")! as HTMLTableElement).rows[rInd] as HTMLTableRowElement).cells[7] as HTMLTableCellElement));
                var restOfButton = document.getElementsByClassName('edit');
                for (var i = 0; i < restOfButton.length; i++) {
                    let element = restOfButton.item(i)
                    element!.removeAttribute("disabled");
                }
            }
        }
    }
}