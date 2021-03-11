<template>
  <div class="container mx-auto">
    <le-goback />
    <div class="block-space">
      <h1 class="text-center text-5xl">{{ pageTitle }}</h1>
    </div>
    <le-category :items="takeAway" />
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
      pageTitle: "Takeaway Menu",
    }
  ),
  computed: mapGetters([
    'loading',
    'takeAway'
  ]),
  async mounted () {
    console.log("this.takeAway");
    console.log(this.takeAway);
  },
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>