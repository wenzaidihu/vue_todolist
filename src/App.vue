<template>
  <div id="app">
    
    <TodoList msg="恶心心的臭大宝"/>
  </div>
</template>

<script>
import TodoList from "@components/TodoList.vue";

export default {
  name: "app",
  components: {
    TodoList
  }
};
</script>

<style>
#app {

}
</style>
