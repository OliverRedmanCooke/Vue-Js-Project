<template>
  <button class="btn">{{ name }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: String,
  },
};
</script>