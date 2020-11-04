<template>
  <div class="container mx-auto min-h-full mt-32">
    <div class="grid grid-cols-12 gap-4">
      <CardPokemon
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :name="pokemon.name"
        :number="pokemon.number"
        :types="pokemon.types"
      ></CardPokemon>
    </div>
  </div>
</template>

<script>
import CardPokemon from '@/components/CardPokemon.vue'
export default {
  components: {
    CardPokemon,
  },
  data() {
    return {
      pokemons: [
        {
          name: 'Bulbasaur',
          number: 1,
          types: ['grass', 'poison'],
        },
        {
          name: 'Ivysaur',
          number: 2,
          types: ['grass', 'poison'],
        },
        {
          name: 'Venosaur',
          number: 3,
          types: ['grass', 'poison'],
        },
        {
          name: 'Charmander',
          number: 4,
          types: ['fire'],
        },
        {
          name: 'Charmeleon',
          number: 5,
          types: ['fire'],
        },
        {
          name: 'Charizard',
          number: 6,
          types: ['fire', 'flying'],
        },
        {
          name: 'Squirtle',
          number: 7,
          types: ['water'],
        },
        {
          name: 'Wartortle',
          number: 8,
          types: ['water'],
        },
        {
          name: 'Blastoise',
          number: 9,
          types: ['water'],
        },
        {
          name: 'Caterpie',
          number: 10,
          types: ['bug'],
        },
        {
          name: 'Metapod',
          number: 11,
          types: ['bug'],
        },
        {
          name: 'Butterfree',
          number: 12,
          types: ['bug', 'flying'],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
