<template>
    <tbody v-bind="localStorage">
        <tr>
            <td id="labelTd"><label id="todoLabel" for="toDoInput">+</label></td>
            <td id="inputTd"><input id="toDoInput" type="text" autocomplete="off"
                                    @focusin="adding"
                                    @focusout="adding"
                                    placeholder="할일추가"/></td>
            <td><button type="submit" id="addButton" @click="addToDo">추가</button></td>
        </tr>
    </tbody>
</template>

<script>
import {adding, addToDo} from '../assets/script/todoInput.ts'
export default {
    name: "ToDoInput",
    methods: {
        adding: adding,
        addToDo: addToDo
    }
}
</script>

<style scoped>
@import "../assets/style/todoInput.css";
</style>