<template>
  <div class="container mx-auto min-h-full mt-32">
    <GridPokemons :pokemons="pokemons" @fetchPokemons="fetchPokemons" />
  </div>
</template>

<script>
import GridPokemons from '@/components/GridPokemons.vue'
export default {
  components: {
    GridPokemons,
  },
  data() {
    return {
      pokemons: [],
      next: 'https://pokeapi.co/api/v2/pokemon',
      count: 0,
    }
  },
  created() {
    this.fetchPokemons()
  },
  methods: {
    fetchPokemons() {
      if (this.next) {
        this.$axios.$get(this.next).then((resp) => {
          this.pokemons.push(...resp.results)
          this.next = resp.next
          this.count = resp.count
        })
      }
    },
  },
}
</script>

<style scoped></style>
