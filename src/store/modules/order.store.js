import { orderService } from "../../services/order-service.js";

export const orderStore = {
  state: {
    isLoading: false,
    orders: [],
    filterBy: {},
    sortBy: null,
    pageIdx: 0,
    pageSize: 12,
  },
  getters: {
    orders({ orders }) {
      return orders;
    },

    isLoading1({ isLoading }) {
      return isLoading;
    },
    ordersToShow(state) {
      var orders = JSON.parse(JSON.stringify(state.orders));
      return orders;
    },
    showPercent({ orders }) {
      let ordersPending = orders.reduce((acc, order) => {
        if (acc[order.status]) acc[order.status]++;
        else acc[order.status] = 1;
        return acc;
      }, {});
      if (!ordersPending.Complete) return 0;
      var precent = Math.floor((ordersPending.Complete / orders.length) * 100);
      return precent;
    },
  },
  mutations: {
    setLoading(state, { isLoading }) {
      state.isLoading = isLoading;
    },
    addOrder(state, { savedOrder }) {
      console.log(savedOrder);
      state.orders.unshift(savedOrder);
      // state.orders = savedOrder;
    },
    updateOrder(state, { savedOrder }) {
      console.log(savedOrder);
      const idx = state.orders.findIndex(
        (order) => order._id === savedOrder._id
        );
      state.orders.splice(idx, 1, savedOrder);
    },
    removeOrder(state, payload) {
      const idx = state.orders.findIndex(
        (order) => order._id === payload.orderId
      );
      state.orders.splice(idx, 1);
    },
    setOrders(state, { orders }) {
      state.orders = orders;
    },
    setFilterOrder(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    setSort(state, { copySort }) {
      state.sortBy = copySort;
    },
    setPageIdx(state, { pageIdx }) {
      state.pageIdx = pageIdx;
      let maxPage = Math.ceil(state.orders.length / state.pageSize);

      if (state.pageIdx >= maxPage) state.pageIdx = 0;
      else if (state.pageIdx < 0) state.pageIdx = maxPage - 1;
    },
    saveOrder(state, { order }) {
      state.orders.push(order);
    },
  },
  actions: {
    async loadOrders({ commit, state }) {
      const filterBy = state.filterBy ? state.filterBy : "";
      commit({ type: "setLoading", isLoading: true });
      try {
        const orders = await orderService.getOrders(filterBy);
        commit({ type: "setOrders", orders });
      } catch (err) {
        console.log("Error in Query Orders (Store):", err);
        throw err;
      } finally {
        commit({ type: "setLoading", isLoading: false });
      }
    },
    async addOrder({ commit }, { order }) {
      commit({ type: "setLoading", isLoading: true });
      try {
        const savedOrder = await orderService.save(order);
        commit({ type: "addOrder", savedOrder });
        console.log(order);
        console.log(savedOrder);
        return savedOrder;
      } catch (err) {
        console.log("Adding Error (Store):", err);
        throw err;
      } 
    },
    async updateOrder({ commit }, { order }) {
      try {
        const savedOrder = await orderService.save(order);
        commit({ type: "updateOrder", savedOrder });
        return savedOrder;
      } catch (err) {
        console.log("Editing Error (Store):", err);
        throw err;
      }
    },
    async removeOrder({ commit }, { orderId }) {
      try {
        await orderService.remove(orderId);
        commit({ type: "removeOrder", orderId });
        return orderId;
      } catch (err) {
        console.log("Removing Error (Store):", err);
        throw err;
      }
    },
    async getUserOrders({ commit }) {
      let orders = await orderService.getOrders();
      commit({ type: "setOrders", orders });
    },
    setFilterOrder({ commit, dispatch }, { filterBy }) {
      commit({ type: "setFilterOrder", filterBy });
      dispatch({ type: "loadOrders" });
    },
  },
};
