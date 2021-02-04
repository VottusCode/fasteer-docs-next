<template>
  <span></span>
</template>

<script lang="ts">
import Vue from "vue";

function() {};

export default Vue.extend({
  data() {
    return { root: document.getElementById("app") };
  },
  destroyed() {
    this.root.classList.add("docs");
    this.root.classList.remove("landing");
  },
  mounted() {
    this.root.classList.add("landing");
    this.root.classList.remove("docs");
  },
});
</script>
