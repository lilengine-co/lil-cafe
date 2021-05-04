<template>
  <div class="card group card--gallery bg-black hover:bg-gray-700 w-full relative overflow-hidden transition duration-150 ease-in-out" :class="featured ? 'p-100p' : 'p-80p'">
    <div v-if="card.cover" class="bg-center bg-cover absolute inset-0 transition duration-150 ease-in-out transform scale-100 group-hover:scale-110" v-bind:style="'background-image:url(' + card.cover + ')'">
    </div>
    <div v-if="lightbox && card.images" class="card__image absolute inset-0 z-50">
      <le-lightbox :images="card.images" />
    </div>
    <template v-if="card.link">
      <a class="absolute group-hover:opacity-0 bg-black opacity-50 inset-0 transition duration-150 ease-in-out z-59" v-if="card.link.uri.includes('http') || card.link.uri.includes('files')" :href="card.link.uri" target="_blank"></a>
      <NuxtLink v-else class="absolute group-hover:opacity-0 bg-black opacity-50 inset-0 transition duration-150 ease-in-out z-59" :to="card.link.uri">
      </NuxtLink> 
    </template>
    <div class="card__content group-hover:opacity-0 opacity-100 transition duration-150 ease-in-out absolute inset-0 p-5 xl:p-6 flex items-center justify-center flex-col text-gray-50 z-60 pointer-events-none">
      <h3 class="card__title block__title">{{ card.heading }}</h3>
      <div class="card__content markup__html" v-html="card.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card" , "lightbox", 'featured'],
}
</script>
<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>