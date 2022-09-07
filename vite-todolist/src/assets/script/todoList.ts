window.onload = () => {
    const delButton : HTMLCollectionOf<Element>  = document.getElementsByClassName("delButton");
    const todoCheck : HTMLCollectionOf<Element> = document.getElementsByClassName("todoCheck");
    Array.from(delButton).forEach(function(element) {
        element.addEventListener("click", delToDoLS);
    });
    Array.from(todoCheck).forEach(function(element) {
        element.addEventListener("click", toDoDone);
    });
}
export function toDoDone(event :Event) {
    let id = event.target!.id;
    id = id.replace("todoCheck", "todoLabel");
    id = id.replace("todoLabel", "");
    const data = JSON.parse(localStorage.getItem(id)!);
    if (event.target.checked == true) {
        data.checked = true;
        localStorage.setItem(id, JSON.stringify(data));
    }
    else {
        data.checked = false;
        localStorage.setItem(id, JSON.stringify(data));
    }
    event.target.form.submit();
}
export function delToDoLS(event : Event) {
    localStorage.removeItem(event.target.id);
    event.target.form.submit();
}