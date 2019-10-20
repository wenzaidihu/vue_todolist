<template>
  <div class="todo-list-wrapper">
    <div class="todo-input-container">
      <TodoInput />
    </div>
    <ul class="todo-list-container list-group">
      <li class="todo-list-item-container" v-for="item in tasklist" :key="item.id">
        <a class="list-group-item">
          <TodoListItem :task="item"/>
        </a>  
      </li>
    </ul>
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
  },
  data: function() {
    return {
      tasklist: [{
        id: 1,
        text: "task 1",
        isFinish: false
      }, {
        id: 2,
        text: "task 2",
        isFinish: false
      }, {
        id: 3,
        text: "task 3",
        isFinish: false
      }, {
        id: 4,
        text: "task 4",
        isFinish: false
      }, {
        id: 5,
        text: "task 5",
        isFinish: false
      }]
    }; 
  }
};
</script>

<style lang="less" scoped>
  .todo-list-wrapper {
    background-color:rgb(0, 255, 242);
    padding: 10%;
    height: 100%;

    .todo-input-container {
      margin-bottom: 20px;
    }

    .todo-list-container {
      margin: 0px;
      padding: 0px;
      list-style: none;

      .todo-list-item-container {
        cursor: pointer;
        margin-bottom: 10px;
      }
    }
  }
</style>
