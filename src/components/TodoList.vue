<template>
  <div class="todo-list-wrapper">
    <TodoInput />
    <TodoListItem />
  </div>
</template>

<script>
import TodoInput from "@components/TodoInput.vue";
import TodoListItem from "@components/TodoListItem.vue";

export default {
  name:"TodoList",
  components: {
    TodoInput,
    TodoListItem
  }
};
</script>

<style scoped>
  .todo-list-wrapper{
    background-color: blue;
  }

</style>
