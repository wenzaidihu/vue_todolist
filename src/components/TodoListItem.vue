<template>
  <div class="todo-list-item-wrapper">
    {{ task.text }}
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    task: {
      type: Object,
      default: function () {
        return {};
      }
    }
  } 
};
</script>

<style lang="less" scoped>

</style>
