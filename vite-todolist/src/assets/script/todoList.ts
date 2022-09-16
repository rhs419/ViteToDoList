export function toDoDone(event :Event) {
    // @ts-ignore
    let id = event.target.id;
    id = id.replace("todoCheck", "todoLabel");
    id = id.replace("todoLabel", "");

    const data = JSON.parse(localStorage.getItem(id));
    // @ts-ignore
    data.checked = !data.checked;
    todos.set(id, data);
}
export function delToDoLS(event : Event) {
    // @ts-ignore
    todos.remove(event.target.id);
}