export const state = () => ({
  pokemons: [],
})

export const mutations = {
  SET_POKEMONS(state, pokemons) {
    state.pokemons = pokemons
  },
}

export const actions = {
  fetchPokemons({ commit }) {
    this.$axios
      .$get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=9999')
      .then((resp) => {
        commit('SET_POKEMONS', resp.results)
      })
  },
}
