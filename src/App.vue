<template>
  <div class="container">
    <Header
      @toggle-form="toggleForm"
      :showAddTask="showAddTask"
      title="Task Manager"
    />
    <div v-if="showAddTask">
      <AddTask @add-task="addTodo" />
    </div>
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTodo"
      :tasks="allTodos"
    />
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  created() {
    this.fetchTodos();
  },
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "addTodo", "deleteTodo", "updateTodo"]),

    async toggleReminder(task) {
      const updTask = { ...task, reminder: !task.reminder };
      this.updateTodo(updTask)
    },

    toggleForm() {
      this.showAddTask = !this.showAddTask;
    },
    async fetchTask(id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
