<template>
  <ItemFilter />
  <div class="game-list-container max-width-container" v-if="items">
    <ItemList :items="itemsToShow" />
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";
import ItemFilter from "../components/ItemFilter.vue";
import { storageService } from "../services/storage-service";
export default {
  components: {
    ItemList,
    ItemFilter,
  },

  data() {
    return {
      filterBy: "",
    };
  },

  computed: {
    getItems() {
      return this.$store.getters.items;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },

    itemsToShow() {
      const category = this.$route.params.item;
      if (!category) return this.items;

      const itemsToDisplay = this.items.filter((item) => {
        return item.category.some((tab) => category.includes(tab));
      });
      return itemsToDisplay;
    },
  },

  methods: {},
};
</script>

<style></style>
