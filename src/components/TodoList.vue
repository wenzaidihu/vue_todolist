<template>
  <div class="todo-list-wrapper">
    <div class="todo-input-container">
      <TodoInput @addTask="addTask" />
    </div>
    <ul class="todo-list-container list-group">
      <li class="todo-list-item-container" v-for="item in taskList" :key="item.id">
        <a class="list-group-item">
          <TodoListItem :task="item" @deleteTask="deleteTask"/>
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
      taskList: [{
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
  },
  methods: {
    getId: function() {
      if (this.taskList.length <= 0) return 1;
      const ids = this.taskList.map(item => item.id);
      const maxId = Math.max(...ids);
      return maxId + 1;
    },
    addTask: function(content) {
      this.taskList.unshift({
        id: this.getId(),
        text: content,
        isFinish: false
      });
    },
    deleteTask: function(taskId) {
      this.taskList = this.taskList.filter(item => {
        return item.id !== taskId;
      });
    }
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
