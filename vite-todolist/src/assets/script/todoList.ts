export function toDoDone(event :Event) {
    // @ts-ignore
    let id = event.target.id;
    id = id.replace("todoCheck", "todoLabel");
    id = id.replace("todoLabel", "");

    const data = JSON.parse(localStorage.getItem(id));
    // @ts-ignore
    data.checked = !data.checked;
    localStorage.setItem(id, JSON.stringify(data));
    event.target.form.submit();
}
export function delToDoLS(event : Event) {
    // @ts-ignore
    localStorage.removeItem(event.target.id);
    event.target.form.submit();
}