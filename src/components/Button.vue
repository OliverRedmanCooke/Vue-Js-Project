<template>
  <button @click="onClick" :style="{background: color}" class="btn">{{ name }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: String,
    color: String
  },
  methods: {
    onClick() {
      console.log('Click')
    }
  }
};
</script>