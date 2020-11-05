<template>
  <div
    class="grid col-span-3 h-64 rounded-2xl shadow-xl"
    :class="validaCorCard(pokemon.types[0].type.name)"
  >
    <div class="pt-8 text-center text-gray-100 text-lg font-semibold">
      #{{ pokemon.id }} - {{ pokemon.name }}
    </div>
    <img :src="imgUrl" alt="Pokemon" class="h-24 justify-self-center" />
    <div class="flex justify-center mb-3">
      <span
        v-for="type in pokemon.types"
        :key="type.type.name"
        class="rounded-2xl mx-1 px-3 text-white text-xs font-medium leading-none flex items-center"
        :class="validaCor(type.type.name)"
      >
        {{ type.type.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pokemon: {
        types: [
          {
            type: {
              name: 'grass',
            },
          },
        ],
      },
    }
  },
  computed: {
    imgUrl() {
      return `https://cdn.traction.one/pokedex/pokemon/${this.pokemon.id}.png`
    },
  },
  created() {
    this.fetchPokemon()
  },
  methods: {
    fetchPokemon() {
      this.$axios.$get(this.url).then((resp) => {
        this.pokemon = resp
      })
    },
    validaCor(type) {
      switch (type) {
        case 'grass':
        case 'bug':
          return 'bg-green-600'
        case 'poison':
          return 'bg-purple-600'
        case 'fire':
        case 'normal':
          return 'bg-red-600'
        case 'flying':
          return 'bg-gray-600'
        case 'water':
          return 'bg-blue-600'
        default:
          return ''
      }
    },
    validaCorCard(type) {
      switch (type) {
        case 'grass':
        case 'bug':
          return 'card-green'
        case 'poison':
        case 'psychic':
          return 'card-purple'
        case 'electric':
          return 'card-yellow'
        case 'fire':
          return 'card-red'
        case 'flying':
          return 'card-silver'
        case 'water':
          return 'card-blue'
        case 'ground':
          return 'card-brown'
        default:
          return 'bg-gray-500'
      }
    },
  },
}
</script>

<style lang="css" scoped>
.card-green {
  background-color: #48d0b0;
}
.card-red {
  background-color: #fb6c6c;
}
.card-blue {
  background-color: #76bdfe;
}
.card-yellow {
  background-color: #ffe18f;
}
.card-purple {
  background-color: #d87bf9;
}
.card-brown {
  background-color: #8a5e17;
}
</style>
