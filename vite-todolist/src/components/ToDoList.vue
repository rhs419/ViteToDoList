<template>
    <tbody id="todo" v-if="todos.length>0">
        <tr>
            <td></td><td> {{group}} {{todos.length}}</td>
        </tr>
    </tbody>
    <tbody id="todoList">
        <ToDoItem :completed="completed" :group="group"/>
    </tbody>
</template>

<script lang="ts">
import ToDoItem from './ToDoItem.vue';
export default {
    name: "ToDoList",
    props: {
      group : String,
      completed: Boolean
    },
    components: {
      ToDoItem
    },
    data:()=>({
        todos: Array<Object>
    }),
    mounted() {
        this.todos = Object.keys(localStorage).filter(key=>key!='number'&&JSON.parse(localStorage.getItem(key)).checked==this.completed)
            .map(key=>JSON.parse(localStorage.getItem(key)!))
            .sort(id=>id)
    }
}
</script>

<style scoped>
    @import "../assets/style/todoList.css";
</style>