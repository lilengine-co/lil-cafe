<template>
  <div class="font-sans">
    <druxt-block-region name="header" :theme="theme" class="fixed top-0 left-0 right-0 md:relative z-20 bg-white"/>
    <main class="pt-28 md:pt-14 lg:pt-20">
      <!-- <DruxtBreadcrumb /> -->
      <Nuxt />
    </main>
    <le-modal />
    <druxt-block-region name="footer" :theme="theme"  class="pt-14 lg:pt-28 clear-both"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    theme: 'legin',
  }),

  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
  },

  computed: {
    isHomePath() {
      return !!this.$store.state.druxtRouter.route.isHomePath
    },
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
