import { coinApi } from '@/apis/coinApi.js';

export const namespaced = true;
export const state = () => ({
  coins: [],
});

export const mutations = {
  SET_COINS(state, coins) {
    state.coins = coins;
  },
};

export const actions = {
  async fetchCoins({ commit }, { perPage, page }) {
    try {
      const res = await coinApi.get(
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=7d`
      );
      commit('SET_COINS', res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
