<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <Button name='Add Task' color="Red" />
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Hello World",
    },
  },
  components: {Button}
};
</script>

<style lang="scss" >
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>