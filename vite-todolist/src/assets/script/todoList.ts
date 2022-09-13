export function toDoDone(event :Event, todos) {
    // @ts-ignore
    let id = event.target.id;
    id = id.replace("todoCheck", "todoLabel");
    id = id.replace("todoLabel", "");

    const data = todos.get(id);
    // @ts-ignore
    data.checked = !data.checked;
    todos.set(id, data);
}
export function delToDoLS(event : Event, todos) {
    // @ts-ignore
    todos.remove(event.target.id);
}