import { itemService } from "../../services/item-service.js";

export const itemStore = {
  state: {
    isLoading: false,
    items: [],
    currItem: null,
    filterBy: {},
    sortBy: null,
    pageIdx: 0,
    pageSize: 12,
  },

  getters: {
    items({ items }) {
      return items;
    },
    categoryName(state) {
      return state.filterBy.category;
    },
    isLoading({ isLoading }) {
      return isLoading;
    },
    getCurrItem(state) {
      return JSON.parse(JSON.stringify(state.currItem));
    },
    itemsToShow(state) {
      var items = JSON.parse(JSON.stringify(state.items));
      return items;
    },
  },
  mutations: {
    setLoading(state, { isLoading }) {
      state.isLoading = isLoading;
    },
    addItem(state, payload) {
      state.items.push(payload.item);
    },
    updateItem(state, { savedItem }) {
      const idx = state.items.findIndex((item) => item._id === savedItem._id);
      state.items.splice(idx, 1, savedItem.item);
    },
    removeItem(state, payload) {
      const idx = state.items.findIndex((item) => item._id === payload.itemId);
      state.items.splice(idx, 1);
    },
    setItems(state, { items }) {
      state.items = items;
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    setSort(state, { copySort }) {
      state.sortBy = copySort;
    },
    setPageIdx(state, { pageIdx }) {
      state.pageIdx = pageIdx;
      let maxPage = Math.ceil(state.items.length / state.pageSize);

      if (state.pageIdx >= maxPage) state.pageIdx = 0;
      else if (state.pageIdx < 0) state.pageIdx = maxPage - 1;
    },
    setCurrItem(state, { item }) {
      state.currItem = item;
    },
    setNewItem(state, { item }) {
      state.currItem = item;
    },
    saveItem(state, { item }) {
      state.items.push(item);
    },
  },
  actions: {
    async loadItems({ commit, state }) {
      const filterBy = state.filterBy ? state.filterBy : "";
      commit({ type: "setLoading", isLoading: true });
      try {
        const items = await itemService.getItems(filterBy);
        commit({ type: "setItems", items });
      } catch (err) {
        console.log("Error in Query Items (Store):", err);
        throw err;
      } finally {
        commit({ type: "setLoading", isLoading: false });
      }
    },
    setFilter({ commit, dispatch }, { filterBy }) {
      commit({ type: "setFilter", filterBy });
      dispatch({ type: "loadItems" });
    },
    isLoading({ commit }, { isLoading }) {
      commit({ type: "setLoading", isLoading });
    },
    async addItem({ commit }, { item }) {
      try {
        const savedItem = await itemService.save(item);
        commit({ type: "addItem", savedItem });
        return savedItem;
      } catch (err) {
        console.log("Adding Error (Store):", err);
        throw err;
      }
    },
    async updateItem({ commit }, { item }) {
      try {
        const savedItem = await itemService.save(item);
        commit({ type: "updateItem", savedItem });
        return savedItem;
      } catch (err) {
        console.log("Editing Error (Store):", err);
        throw err;
      }
    },
    async removeItem({ commit }, { itemId }) {
      try {
        await itemService.remove(itemId);
        commit({ type: "removeItem", itemId });
        return itemId;
      } catch (err) {
        console.log("Removing Error (Store):", err);
        throw err;
      }
    },
    async setCurrItem({ commit }, { itemId }) {
      const item = await itemService.getById(itemId);
      commit({ type: "setCurrItem", item });
      return item;
    },
    async getUserItems({ commit, getters }) {
      let userId = getters.loggedinUser._id;
      let filterBy = { userId };
      let items = await itemService.query(filterBy);
      commit({ type: "setItems", items });
    },
  },
};
