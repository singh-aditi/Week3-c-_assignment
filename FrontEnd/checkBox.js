export class checkBox {
    check(i) {
        let checkButton = document.createElement("input");
        checkButton.setAttribute("type", "checkbox");
        checkButton.id = "check" + i;
        checkButton.checked = false;
        return checkButton;
    }
}
