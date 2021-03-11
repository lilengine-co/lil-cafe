<template>
  <div class="container mx-auto py-10 bg-gray-200 rounded">
    <h1>This is the square app</h1>
    <div>Locations</div>
    <ul>
      <li v-for="location in locations" :key="location.id">
        phoebe
        {{ location.name }}
      </li>
    </ul>
    <!-- {{ locations }} -->
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

// const client = new Client({
//   environment: Environment.Sandbox,
//   accessToken: process.env.SQUARE_ACCESS_TOKEN,
// })

export default {
  methods: {
    // Get all collections to display collections block, and get home collection to displaying the home products
    ...mapActions([
      // 'fetchSquare'
    ])
  },
  computed: mapGetters([
    'loading',
    'locations',
    'catelogs'
  ]),
  async mounted () {
    // this.fetchSquare();
    console.log(this.loading);
    console.log(this.locations);
    console.log(this.catelogs);
  },
}
</script>

<style>

</style>