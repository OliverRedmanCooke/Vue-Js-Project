<template> 
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder':'', 'task']">
        <div> 
            <h3>{{task.text}}</h3>
            <p>{{task.day}}</p>        
        </div>
        <i @click="$emit('delete-task', task.id)" class="fas fa-times" ></i>
    </div>
</template>

<script>

export default {
  name: "Task",
  props: {
    task: Object
  },
  methods: {
  }
};
</script>

<style lang="scss" scope >

    .fas { 
        color: red;
        cursor: pointer;
    }

    .task {
        background: rgb(228, 228, 228);
        margin: 10px;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
    }

    .task.reminder {
        border-left: 5px solid rgb(157, 157, 252);
    }
</style>