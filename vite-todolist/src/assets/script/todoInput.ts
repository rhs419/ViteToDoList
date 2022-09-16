class ToDo{
    id : string;
    checked : boolean;
    todoText : string;
    constructor(id : string, checked : boolean, text : string) {
        this.id=id;
        this.checked = checked;
        this.todoText = text;
    }
}

function enter(e : KeyboardEvent) : void{
    const key : number | string =e.key || e.keyCode;
    if (key === 'Enter' || key === 13) {
        addToDo();
    }
}

export function adding() : void{
    const label : HTMLLabelElement | null = document.querySelector("#todoLabel");
    label!.innerText=="○"?label!.innerText="+":label!.innerText="○";
}

function addToDoLS(text : string) : void{
    if(localStorage.getItem("number")==null) {
        localStorage.setItem("number", "0");
    }
    const number : string | null = localStorage.getItem("number");
    const todo : ToDo = new ToDo("todo" + number, false, text);
    localStorage.setItem(number,JSON.stringify(todo));
    if(localStorage.getItem("number")!=null) {
        localStorage.setItem("number", ""+(parseInt(<string>localStorage.getItem("number"))+1));
    }
}

export function addToDo() : void{
    const toDoInput : HTMLInputElement | null = document.querySelector("#toDoInput");
    if(!(toDoInput!.value == null || toDoInput!.value.trim() == "")) {
        addToDoLS(toDoInput!.value);
    }
    else{
        toDoInput!.focus();
    }
    toDoInput!.value ="";

}