<template>
  <div>
    <JsonView :data="data" jsonKey="2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import JsonView from "../src/index";
export default defineComponent({
  name: "App",
  components: {
    JsonView,
  },
  setup() {
    const data = reactive({
      name: "yugang.cao",
      age: 23,
      home: "my home",
    });
    return {
      data,
    };
  },
});
</script>

<style scoped></style>
