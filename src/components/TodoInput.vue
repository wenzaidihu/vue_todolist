<template>
  <div class="todo-input-wrapper">
    <div class="input-group">
      <input
        class="form-control"
        type="text"
        v-model="content"
        placeholder="请输入"
      >
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="onSubmit">提交</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data: function() {
    return {
      content: ""
    };
  },
  methods: {
    onSubmit: function() {
      console.log("this.content:", this.content);  
    }
  }
};
</script>

<style lang="less" scoped>

</style>
