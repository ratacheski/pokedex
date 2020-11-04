<template>
  <div
    class="grid col-span-3 h-64 rounded-2xl shadow-xl"
    :class="validaCorCard()"
  >
    <div class="pt-8 text-center text-gray-100 text-lg font-semibold">
      #{{ number }} - {{ name }}
    </div>
    <img :src="imgUrl" alt="Pokemon" class="h-24 justify-self-center" />
    <div class="flex justify-center mb-3">
      <span
        v-for="type in types"
        :key="type"
        class="rounded-2xl mx-1 px-3 text-white text-xs font-medium leading-none flex items-center"
        :class="validaCor(type)"
      >
        {{ type }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      required: true,
    },
    types: {
      type: Array,
      default: null,
    },
  },
  computed: {
    imgUrl() {
      return `https://cdn.traction.one/pokedex/pokemon/${this.number}.png`
    },
  },
  methods: {
    validaCor(type) {
      switch (type) {
        case 'grass':
        case 'bug':
          return 'bg-green-600'
        case 'poison':
          return 'bg-purple-600'
        case 'fire':
          return 'bg-red-600'
        case 'flying':
          return 'bg-gray-600'
        case 'water':
          return 'bg-blue-600'
        default:
          return ''
      }
    },
    validaCorCard() {
      switch (this.types[0]) {
        case 'grass':
        case 'bug':
          return 'card-green'
        case 'poison':
          return 'card-purple'
        case 'fire':
          return 'card-red'
        case 'flying':
          return 'card-silver'
        case 'water':
          return 'card-blue'
        default:
          return 'bg-grey-100'
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
</style>
