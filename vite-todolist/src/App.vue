<template id="app">
    <h1>SYS To-Do List</h1>
    <table id = "todoContainer">
        <ToDoInput/>
        <ToDoList/>
        <DoneList/>
    </table>
</template>

<script>
import DoneList from './components/DoneList.vue';
import ToDoList from './components/ToDoList.vue';
import ToDoInput from "./components/ToDoInput.vue";
export default {
    name: 'App',
    components: {
        ToDoList,
        DoneList,
        ToDoInput
    },
    watch:{
        localStorage(newValue, oldValue){
            console.log("newValue : "+ newValue)
            console.log("oldValue : "+ oldValue)
        }
    }
}
</script>

<style>
</style>
