<template id="app">
    <h1>SYS To-Do List</h1>
    <form @submit="">
        <table id = "todoContainer">
            <ToDoInput/>
            <ToDoList group="할일" />
            <ToDoList group="완료" completed/>
        </table>
    </form>
</template>
<script>
import ToDoList from './components/ToDoList.vue';
import ToDoInput from "./components/ToDoInput.vue";
export default {
    name: 'App',
    components: {
        ToDoList,
        ToDoInput
    }
}
</script>
<style>
</style>
