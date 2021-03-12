<template>
  <div class="container mx-auto">
    <le-goback />
    <div class="block-space">
      <h1 class="text-center text-5xl">{{ pageTitle }}</h1>
    </div>
    <div class="block-space">
      <div class="grid grid lg:grid-cols-2 lg:gap-6 lg:gap-x-32">
        <div>
          <h2 class="block__title text-center text-2xl md:text-4xl">Breakfast</h2>
          <le-category :items="breakfast" />
        </div>
        <div>
          <h2 class="block__title  text-center text-2xl md:text-4xl">Lunch</h2>
          <le-category :items="lunch" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  head() {
    return {
      title: this.pageTitle + " | Plumb café",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  data: () => (
    {
      pageTitle: "Dine In",
    }
  ),
  computed: mapGetters([
    'loading',
    'breakfast',
    'lunch',
  ]),
  async mounted () {
    console.log("this.breakfast");
    console.log(this.breakfast);
    console.log(this.lunch);
  },
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>