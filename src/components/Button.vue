<template>
  <button :style="{background: color}" class="btn">{{ name }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: String,
    color: String
  },
};
</script>