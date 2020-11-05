<template>
  <div class="grid grid-cols-12 gap-4">
    <CardPokemon
      v-for="(pokemon, index) in pokemons"
      :key="index"
      :ref="`pokemon-${index}`"
      :url="pokemon.url"
    ></CardPokemon>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  beforeMount() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const el = this.$refs[`pokemon-${this.pokemons.length - 1}`][0].$el
      if (this.elementInViewport(el)) {
        this.$emit('fetchPokemons')
      }
    },
    elementInViewport(el) {
      let top = el.offsetTop
      const height = el.offsetHeight

      while (el.offsetParent) {
        el = el.offsetParent
        top += el.offsetTop
      }

      return (
        top >= window.pageYOffset &&
        top + height <= window.pageYOffset + window.innerHeight
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
