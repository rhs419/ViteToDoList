export function toDoDone(event :Event) {
    let id = event.target.id;
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