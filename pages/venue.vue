<template>
  <div class="container mx-auto">
    <div class="block-space">
      <h1 class="text-center text-5xl mb-2">{{ pageTitle }}</h1>
      <div class="markup-block block-space">
        <p class="mb-2">
          With a focus on fresh, local produce, at Plumb we offer a range of
          breakfast and lunch items sure to please. Our all day menu is
          available for dine in or take away, as well as freshly made gourmet
          sandwiches and wraps in our display fridge.
        </p>
        <p class="mb-2">
          Open 7am-4pm weekdays, and 8am-2pm weekends, join us for brekkie or
          lunch in our fully licensed cafe.
        </p>
        <p class="mb-2">
          Bookings can be made using the booking tab, or by calling
          <a class="underline" href="tel:0456567248">0456 567 248</a>.
        </p>
        <p>
          Planning your next event, meeting or function? Get in touch by
          emailing
          <a class="underline" href="mailto:fyshwick@lilcafe.co"
            >fyshwick@lilcafe.co</a
          >
          to speak to us about tailoring a package to suit your needs.
        </p>
        </div>
        </div>
        </div>
        </div>
        <p class="mb-2">
          "Please note we are not accepting dine in bookings during COVID19 lockdown in the ACT". 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: this.pageTitle + " | Plumb café",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]
    };
  },
  data: () => ({
    pageTitle: "Venue"
  })
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
