<template>
    <tr v-for="todo in todos" :key="todos.id">
        <td><input type="checkbox" :id="'todoCheck'+todo.id" class="todoCheck" @click="toDoDone" :checked="todo.checked"/></td>
        <td><label :id="'todoLabel'+todo.id" :class="{checked: todo.checked}">{{todo.todoText}}</label></td>
        <td><button type="button" :id="todo.id" class="delButton" @click="delToDoLS">삭제</button></td>
    </tr>
</template>

<script lang="ts">
import {toDoDone, delToDoLS} from '../assets/script/todoList'
export default {
    name: "ToDoItem",
    methods: {
        toDoDone: function (e: Event){
            toDoDone(e,this.todos);
        },
        delToDoLS: function(e: Event){
            delToDoLS(e,this.todos);
        }
    },
    props:{
        group : String,
        completed : Boolean
    },
    data:()=>({
        todos: Array<Object>
    }),
    mounted() {
        if(this.group=='할일'||this.group=='완료'){
            this.todos = Object.keys(localStorage).filter(key=>key!='number'&&JSON.parse(localStorage.getItem(key)!).checked==this.completed)
                .map(key=>JSON.parse(localStorage.getItem(key)!))
                .sort(id=>id)
        }else{
            this.todos = Object.keys(localStorage).filter(key=>key!='number'&&JSON.parse(localStorage.getItem(key)!).checked==this.completed&&JSON.parse(localStorage.getItem(key)!).group==this.group)
                .map(key=>JSON.parse(localStorage.getItem(key)!))
                .sort(id=>id)
        }
    },
    unmounted() {
        for (const todo of this.todos) {
            localStorage.setItem(todo.id,todo);
        }
    }
}
</script>
<style scoped>
    @import "../assets/style/todoItem.css";
</style>