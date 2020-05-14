export class button {
    createButton(value, className) {
        let btn = document.createElement("input");
        btn.value = value;
        btn.className = className;
        btn.type = "button";
        return btn;
    }
}
