<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <Button @click="toggleForm" :name="showAddTask ? 'Close': 'add task'" :color="showAddTask ? 'red': 'green'" />
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
    showAddTask: Boolean
  },
  components: {Button},
  methods: {
    toggleForm() {
      this.$emit('toggle-form')
    }
  }
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