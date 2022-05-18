<template>
  <div class="item-list">
    <GamePreview :item="item" v-for="item in items" :key="item"></GamePreview>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  props: ["items"],
  components: {
    GamePreview,
  },
};
</script>

<style></style>
