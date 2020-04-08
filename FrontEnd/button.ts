export class button{
    createButton(value:string,className:string){
        let btn: HTMLInputElement=document.createElement("input");
        btn.value=value;
        btn.className=className;
        btn.type="button";

        return btn;
    }
}