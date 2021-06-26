<template>
  <div>
    <JsonView :data="data" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import JsonView from "vue3-json-view";
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
      someKey: {
        a: 123,
        b: "sdfdfd",
      },
      arr: [1, 2, 3],
    });
    return {
      data,
    };
  },
});
</script>

<style scoped></style>
