<template>
  <div @click="toDetailsPage" class="item-card">
    <div class="card-thumbnail image-container">
      <img :src="item.thumbnail" :alt="item.title" />
    </div>
    <div class="card-content">
      <h1 class="title">{{}}</h1>
      <p>
        {{}}
      </p>
    </div>
    <div class="card-footer">{{}}</div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    toDetailsPage() {
      this.$router.push("/details" + "/" + this.item.id);
    },
  },
};
</script>

<style></style>
