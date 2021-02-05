<template>
  <span></span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  destroyed() {
    const root = document.getElementById("app");
    if (!root) return;

    root.classList.add("docs");
    root.classList.remove("landing");
  },
  mounted() {
    const root = document.getElementById("app");
    if (!root) return;

    root.classList.add("landing");
    root.classList.remove("docs");
  },
});
</script>
