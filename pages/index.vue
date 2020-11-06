<template>
  <div class="container mx-auto min-h-full mt-32">
    <GridPokemons :pokemons="pokemonsList" @fetchPokemons="fetchPokemons" />
  </div>
</template>

<script>
import GridPokemons from '@/components/GridPokemons.vue'
import { mapState } from 'vuex'
export default {
  components: {
    GridPokemons,
  },
  data() {
    return {
      pokemonsList: [],
      next: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100',
      count: 0,
    }
  },
  computed: {
    ...mapState('pokemons', ['pokemons']),
  },
  created() {
    this.$store.dispatch('pokemons/fetchPokemons')
    this.fetchPokemons()
  },
  methods: {
    fetchPokemons() {
      if (this.next) {
        this.$axios.$get(this.next).then((resp) => {
          this.pokemonsList.push(...resp.results)
          this.next = resp.next
          this.count = resp.count
        })
      }
    },
  },
}
</script>

<style scoped></style>
