export class checkBox{
    check(i:number)
    {
        let checkButton: HTMLInputElement = document.createElement("input");
            checkButton.setAttribute("type", "checkbox");
            checkButton.id = "check" + i;
            checkButton.checked = false;
            return checkButton;
    }
}