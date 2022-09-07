<template>
    <tbody id="todo" v-if="todos.length>0">
        <tr>
            <td></td><td> 할일 {{todos.length}}</td>
        </tr>
    </tbody>
    <tbody id="todoList">
        <tr v-for="(todo, key) in todos" v-bind=localStorage>
                <td><input type="checkbox" :id="'todoCheck'+todo.id" class="todoCheck" @click="toDoDone"/></td>
                <td><label :id="'todoLabel'+todo.id">{{todo.todoText}}</label></td>
                <td><button type="button" :id="todo.id" class="delButton" @click="delToDoLS">삭제</button></td>
        </tr>
    </tbody>
</template>

<script lang="ts">
import {toDoDone} from '../assets/script/todoList'
import {delToDoLS} from '../assets/script/todoList'
export default {
    name: "ToDoList",
    props: {
        msg: String
    },
    methods: {
        toDoDone: toDoDone,
        delToDoLS: delToDoLS
    },
    data:()=>({
        todos: Object.keys(localStorage).filter(key=>key!='number'&&JSON.parse(localStorage.getItem(key)!).checked==false)
            .map(key=>JSON.parse(localStorage.getItem(key)!))
            .sort(id=>id)
    })
}
</script>

<style scoped>
    @import "../assets/style/todoList.css";
</style>