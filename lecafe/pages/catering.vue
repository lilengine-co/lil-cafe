<template>
  <div class="container mx-auto">
    <le-goback />
    <div class="block-space">
      <h1 class="text-center text-5xl">{{ pageTitle }}</h1>
    </div>
    <le-category :items="catering" />
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

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
      pageTitle: "Catering",
    }
  ),
  computed: mapGetters([
    'loading',
    'catering'
  ]),
  async mounted () {
    console.log("this.catering");
    console.log(this.catering);
  },
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>