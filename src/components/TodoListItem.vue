<template>
  <div class="todo-list-item-wrapper">
    <div class="left-container">
      <div class="checkbox-container">
        <input type="checkbox" />
      </div>
      <div class="content-container">
        {{ task.text }}
      </div>
    </div>
    <div class="right-container">
      <div class="delete-item-container btn-group btn-group-xs">
        <button type="button" class="btn btn-danger">
          删除
        </button>
      </div>
    </div>
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
  .todo-list-item-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .checkbox-container {
        margin-right: 20px;
      }
    }
  }
</style>
