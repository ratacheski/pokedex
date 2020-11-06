<template>
  <div
    class="grid col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-64 rounded-2xl shadow-xl cursor-pointer"
    :class="validaCorCard(pokemon.types[0].type.name)"
    @click="detailPokemon"
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
    detailPokemon() {
      alert(this.pokemon.name)
    },
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
        case 'fairy':
        case 'psychic':
          return 'bg-purple-600'
        case 'fire':
        case 'normal':
          return 'bg-red-600'
        case 'flying':
        case 'dragon':
          return 'bg-gray-600'
        case 'water':
          return 'bg-blue-600'
        case 'ice':
          return 'bg-blue-300'
        case 'electric':
          return 'bg-yellow-600'
        case 'ground':
          return 'bg-yellow-900'
        case 'fighting':
          return 'bg-teal-600'
        case 'rock':
        case 'steel':
          return 'bg-gray-500'
        case 'dark':
        case 'ghost':
          return 'bg-gray-800'
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
        case 'fighting':
          return 'card-red'
        case 'flying':
        case 'rock':
          return 'card-silver'
        case 'water':
          return 'card-blue'
        case 'ground':
        case 'normal':
          return 'card-brown'
        default:
          return 'bg-gray-400'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.card-green {
  background-color: #48d0b0;
  &:hover {
    background-color: #43b89c;
  }
}
.card-red {
  background-color: #fb6c6c;
  &:hover {
    background-color: #cc5757;
  }
}
.card-blue {
  background-color: #76bdfe;
  &:hover {
    background-color: #5c90c2;
  }
}
.card-yellow {
  background-color: #ffe18f;
  &:hover {
    background-color: #d4bc78;
  }
}
.card-purple {
  background-color: #d87bf9;
  &:hover {
    background-color: #b769d3;
  }
}
.card-brown {
  background-color: #9e7744;
  &:hover {
    background-color: #8a683b;
  }
}
.card-silver {
  background-color: #bdd5d6;
  &:hover {
    background-color: #9db0b1;
  }
}
</style>
